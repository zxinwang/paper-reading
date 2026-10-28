"""Dependency-free repository/resource checks, not a scientific or full YAML audit."""
from pathlib import Path
from html.parser import HTMLParser
import re

ROOT = Path(__file__).resolve().parents[1]
errors = []
def require(ok, message):
    if not ok:
        errors.append(message)

skill = (ROOT/'SKILL.md').read_text(encoding='utf8')
front = re.match(r'^---\s*\n(.*?)\n---', skill, re.S)
require(front is not None, 'Missing frontmatter delimiters')
if front:
    require(re.search(r'^name:\s*paper-reading\s*$', front[1], re.M), 'Unexpected Skill name')
    require(re.search(r'^description:\s*\S', front[1], re.M), 'Missing description')
require(len(list(ROOT.rglob('SKILL.md'))) == 1, 'Keep one canonical SKILL.md')
for name in ['references/report-workflow.md','assets/report-shell.html','assets/report.css','assets/glossary-panel.css','assets/glossary-interactions.js']:
    require((ROOT/name).is_file(), 'Missing resource: '+name)
shell = (ROOT/'assets/report-shell.html').read_text(encoding='utf8')
runtime = re.search(r'<script id="movable-glossary-runtime">(.*?)</script>',shell,re.S)
require(runtime and runtime[1].strip()==(ROOT/'assets/glossary-interactions.js').read_text(encoding='utf8').strip(), 'Embedded glossary differs from shared runtime')
for i in range(1,14):
    require(f'###' in skill and re.search(rf'#### {i}\. ',skill), f'Missing research stage {i}')

class Inspect(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=[]; self.links=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.append(a['id'])
        for key in ['href','src']:
            if a.get(key): self.links.append(a[key])

for p in [ROOT/'index.html',ROOT/'assets/report-shell.html',ROOT/'examples/omni-livo/index.html']:
    if not p.exists(): continue
    parser=Inspect(); parser.feed(p.read_text(encoding='utf8'))
    require(len(parser.ids)==len(set(parser.ids)),f'Duplicate HTML IDs: {p.relative_to(ROOT)}')
    for link in parser.links:
        if link.startswith('#'):
            require(not link[1:] or link[1:] in parser.ids,f'Missing fragment {link}: {p.relative_to(ROOT)}')
        elif not re.match(r'^(https?:|mailto:|data:)',link):
            target=link.split('#')[0].split('?')[0]
            require(not link.startswith('file:'),f'Local file URL: {p.relative_to(ROOT)}')
            if target: require((p.parent/target).exists(),f'Missing local resource {link}: {p.relative_to(ROOT)}')
for p in [ROOT/'README.md',ROOT/'README_CN.md',ROOT/'CONTRIBUTING.md',ROOT/'examples/omni-livo/README.md']:
    if not p.exists(): continue
    for link in re.findall(r'\]\(([^\s)]+)\)',p.read_text(encoding='utf8')):
        if re.match(r'^(https?:|mailto:|#)',link):continue
        target=link.split('#')[0]
        require((p.parent/target).exists(),f'Missing documentation link {link}: {p.relative_to(ROOT)}')
if errors:
    raise SystemExit('\n'.join(errors))
print('Resource checks passed. Browser behavior and scientific claims require separate validation.')
