# paper-reading

An Agent Skill for evidence-grounded academic paper deep reading, critical analysis, and interactive HTML reports.

## Features

- Explains a paper's problem, method, mathematics, experiments, assumptions, and limitations for readers from any discipline.
- Defines technical terms at first use and builds a searchable glossary with examples and paper-specific roles.
- Separates paper claims, prior work, inference, and unverified hypotheses; links claims to their sources.
- Designs a focused seven-day replication, falsifiable counterexamples, and a candidate research direction.
- Produces a real interactive HTML report when requested, with navigation, diagrams, derivations, and evidence links where applicable. Self-contained offline output is preferred.

## Use cases

Use it to prepare a journal club, learn an unfamiliar research area, evaluate a paper's evidence, plan a small replication, or investigate follow-up research. A narrowly scoped question need not trigger the full review.

## Installation

Clone the repository into your Codex user skills directory:

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/zxinwang/paper-reading.git ~/.codex/skills/paper-reading
```

PowerShell:

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.codex\skills" | Out-Null
git clone https://github.com/zxinwang/paper-reading.git "$env:USERPROFILE\.codex\skills\paper-reading"
```

If `CODEX_HOME` is configured, use its `skills` directory instead of `~/.codex/skills`. Do not clone over an existing skill. Restart Codex or start a fresh session if the skill is not discovered. See [OpenAI's skill guidance](https://developers.openai.com/plugins/build/skills) and the [Agent Skills specification](https://agentskills.io/specification).

## Usage

In a new Codex session, explicitly invoke `$paper-reading` or ask for a deep paper review. Supply a PDF, DOI, title, or accessible paper URL, and specify the output language and any focus or resource constraints.

```text
Use $paper-reading to deeply review this paper. Explain its method,
mathematics, experiments, limitations, and follow-up work, and create
an interactive HTML report for a beginner: <PDF path or paper URL>
```

```text
Use $paper-reading to design a seven-day replication of the main claim
in this paper. State what the reduced experiment cannot validate: <DOI>
```

## Input and output

Input can be a local paper PDF, DOI, paper title, or link; appendices, supplementary material, official code and data improve coverage when accessible. A full review produces an evidence-linked analysis and, when requested, an actual HTML file. Reports adapt to the available evidence and the user's requested scope. Literature retrieval requires available network access; restricted or missing sources are disclosed.

An HTML report can include a table of contents, method diagrams, interactive pipeline stages, expandable derivations, experimental comparisons, parameter demonstrations, and a searchable glossary. Controls must work and simulated examples must be explicitly labeled; specific features depend on the paper, environment, and available evidence. Offline behavior is preferred, with any remaining dependencies disclosed.

## The 13-part review

1. Research problem and value
2. Prior work and remaining gap
3. A plausible research path, explicitly labeled as reconstruction
4. Core intuition
5. Method and end-to-end pipeline
6. Mathematics and theory when applicable
7. Experiments and evidence
8. Takeaways
9. Most fragile assumption
10. Minimal seven-day replication
11. Counterexamples and falsification
12. Follow-up research and independent evidence
13. A testable candidate research idea

## Evidence and limitations

The workflow distinguishes `[Paper]`, `[Prior work]`, `[Inference]`, and `[Hypothesis]`. It asks the agent to cite the original paper and external sources, check reported numbers, and disclose inaccessible material. It does not guarantee access to paywalled sources, exhaustive literature coverage, novelty, successful replication, or error-free interpretation. Users should independently verify consequential claims, equations, citations, and generated artifacts. AI-generated simulations are not experimental results.

## Project structure

```text
paper-reading/
├── SKILL.md
├── README.md
└── .gitignore
```

## Feedback and contributions

Use [GitHub issues](https://github.com/zxinwang/paper-reading/issues) for reproducible problems and suggestions, and pull requests for proposed improvements. Avoid sharing private papers, personal information, or credentials in public issues.

No license has been selected; publication alone does not grant a license to reuse or redistribute the project.
