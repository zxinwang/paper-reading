# Contributing

Use issues for reproducible bugs and source-grounded improvements. Include the agent/tool versions, paper identifier and accessible source coverage, expected and observed behavior, and the smallest useful reproduction. Redact personal paths and credentials; do not upload private PDFs or restricted material.

Preserve all 13 research stages, first-use terminology explanations, four evidence labels, and honest verification boundaries. Domain-specific examples must not become a required user profile or field assumption.

For interface changes, test actual behavior in a browser and inspect screenshots. Check dragging, docking, reset, search, keyboard access, and the content-specific controls. State the platforms actually tested. Never infer a passed test from code inspection alone.

The shared glossary runtime is also embedded in `assets/report-shell.html`; update both together. Keep the source CSS and embedded shell consistent when changing the design. Run:

```bash
python scripts/validate_resources.py
```

This dependency-free check validates resource references, the embedded glossary runtime, basic Skill metadata, local documentation links, and HTML fragment targets. It does not validate scientific conclusions or replace browser QA. Use a YAML-aware Skill validator when editing frontmatter.

Keep examples portable and source-qualified. Do not add unsupported claims, test badges, fabricated citations, paper PDFs, or a project license without the owner's decision. Public availability is not a reuse license.
