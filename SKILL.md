---
name: paper-reading
description: Deeply analyze academic papers, explain methods and mathematics, assess evidence, and create interactive HTML reports. Use for paper deep reading, critical review, replication planning, or follow-up research.
---

# Paper Reading

## Purpose

Analyze an academic paper rigorously and accessibly. Explain its
research problem, prior work, reasoning, method, mathematics, evidence,
limitations, and possible follow-up research. When requested, produce a
real, downloadable, interactive HTML report.

This skill is domain-agnostic. Do not assume a particular user profile,
research field, project, preferred researcher, or writing persona. Adapt
the terminology and examples to the paper and to any preferences
explicitly stated in the request.

## When to use

Use this workflow when asked to deeply explain or summarize a paper,
reconstruct its intuition, derive its mathematics, evaluate its claims,
plan a replication, investigate follow-up work, propose a research
direction, or generate an interactive HTML report.

For a narrow question, short summary, or translation, answer only the
requested scope rather than forcing the entire workflow.

## Core rules

1.  Read the paper and relevant source material before making
    paper-specific claims.
2.  Prefer the complete paper, appendices, supplements, official project
    page, code, and data over search snippets or secondary summaries.
3.  Never invent inaccessible details. State exactly what could and
    could not be accessed.
4.  Preserve the paper's terminology, structure, framing, and level of
    detail. Explain and critique the source; do not silently replace its
    content with general knowledge.
5.  Distinguish four evidence types throughout the analysis:
    -   **\[Paper\]**: explicitly stated or directly shown in the paper.
    -   **\[Prior work\]**: supported by other research.
    -   **\[Inference\]**: reasoned interpretation grounded in available
        evidence.
    -   **\[Hypothesis\]**: an unverified proposal or prediction.
6.  Cite paper-specific claims with section, page, figure, table,
    equation, or other available source markers. Cite external research
    with verifiable links.
7.  Verify important numbers against original tables and figures.
    Distinguish absolute gains from relative gains, percentage points
    from percentages, averages from worst cases, and simulation from
    real-world results.
8.  Explain unfamiliar terms and abbreviations at first use. Do not
    assume common acronyms are obvious to every reader.
9.  Use clear, natural, technically precise language. Do not imitate a
    named researcher or assume a particular persona.
10. Do not force sections that do not apply. If the paper has no
    substantive mathematical derivation, say so.
11. Separate criticism from speculation. Tie limitations to evidence or
    label them as hypotheses.
12. Do not claim novelty, successful replication, code execution, or
    interaction testing unless the relevant check was actually
    performed.

## Workflow

### Phase 1 --- Identify and retrieve

1.  Resolve the paper using the provided title, uploaded PDF, DOI,
    publisher page, arXiv record, author page, or project repository.
2.  Record bibliographic details when available: title, authors, year,
    venue, DOI/arXiv ID, and official links.
3.  Read the full paper where possible, including figures, tables,
    equations, appendices, and supplementary material.
4.  Inspect official code, datasets, and project pages if relevant.
5.  Search for key prior work, important baselines, later research,
    independent replications, and possible criticism. Use the current
    date as the search cutoff.
6.  When sources disagree, explain the disagreement and identify what
    each source supports.
7.  If only partial text is accessible, state the actual coverage. Never
    claim to have read, executed, or verified something that was not
    accessed.

### Phase 2 --- Build an evidence map

Identify: - the central research question and motivation; - the paper's
explicit claims and contributions; - assumptions and scope conditions; -
inputs, modules, intermediate representations, outputs, and failure
modes; - the mathematical mechanisms essential to the method; - which
experiments test which claims; - limitations, open questions, and
candidate research opportunities.

Connect each major claim to the strongest available evidence, such as a
section, page, figure, table, equation, repository, or external source.

### Phase 3 --- Analyze the paper in 13 parts

Use the following order for a full review. Adapt the wording to the
paper, but preserve the reasoning flow.

#### 1. Research problem and value

State the central idea in one sentence. Explain the problem, why it
matters, where it arises, what solving it could enable, and which
outcomes the paper seeks to improve. Use a concrete example when useful.

#### 2. Prior work and remaining gap

Explain what previous research has already achieved. Compare
representative approaches by principle, assumptions, strengths, costs,
and failure modes. Identify the precise gap addressed by the paper.
Avoid generic claims such as "previous work is not robust" without
specifying conditions or evidence.

#### 3. Reconstruct a plausible research path

Before presenting the paper's method, reconstruct a plausible line of
reasoning using only established background, prior work, and observed
failure modes: - What was already known? - Where did existing methods
fail or become expensive? - What observations might motivate a different
design? - What candidate ideas follow naturally from prior knowledge? -
Why might those ideas work, and how might they fail?

Label this as a **reasoned reconstruction**, not a factual account of
the authors' private thought process, unless the authors explicitly
documented it. Do not use the paper's claimed contribution as a premise
in this section.

#### 4. Core intuition

Explain the method's central idea before technical details. State the
key observation, what changes compared with previous methods, why that
change may help, and which problems remain. Use an analogy only if it
preserves the real mechanism.

#### 5. Method and end-to-end pipeline

Explain the actual data flow: 1. Inputs and assumptions. 2.
Preprocessing. 3. Each module's role. 4. Intermediate representations.
5. Decisions, transformations, or optimization steps. 6. Outputs and
success criteria. 7. How errors propagate between modules.

Use a concrete example appropriate to the paper. For every stage,
explain its input, operation, output, purpose, and likely failure mode.
Recreate the system architecture or pipeline as a clearly labeled
schematic when possible.

#### 6. Mathematics and theory

First determine whether substantive mathematics is central to the paper.
Do not manufacture a derivation if the contribution is primarily a
system, dataset, or empirical study.

When mathematics matters: - introduce necessary prerequisites; - define
every symbol; - explain the purpose of each equation; - derive key
results step by step from basic principles; - explain the intuition
behind each step; - state assumptions and validity conditions; - connect
equations to the method and implementation; - distinguish formulas
reproduced from the paper from pedagogical reformulations.

Use valid Markdown math or reliably rendered HTML formulas. If a formula
appears inconsistent or possibly erroneous, cite its location, explain
the issue, and distinguish confirmed errors from unresolved ambiguities.

#### 7. Experiments and evidence

For each important experiment, use:

**Question → Design → Baselines → Result → Supported conclusion → What
remains unproven**

Check whether the main claim is directly tested, whether baselines are
appropriate, whether ablations support the proposed mechanism, whether
metrics match the claim, whether generalization is tested, and whether
computational/deployment costs and failures are reported.

Verify important values against original figures and tables. Recalculate
metrics when useful and show the calculation. Do not generalize beyond
tested conditions.

#### 8. Takeaways

Summarize 3--7 important lessons. For each, state the finding, evidence,
significance, and implication. Separate demonstrated results from
broader interpretation.

#### 9. Most fragile assumption

Identify the assumption whose failure would most undermine the method.
Explain why it is fragile, what evidence supports it, what is missing,
how the system would fail if violated, and how to test it. Consider only
assumptions relevant to the paper.

#### 10. Minimal one-week replication

Design a feasible experiment that tests one central claim, not
necessarily the entire paper. Include the objective, hypothesis,
data/software/hardware, smallest useful implementation, adapted
seven-day plan, expected inputs and outputs, metrics, success criteria,
troubleshooting, and artifacts to save.

If full replication requires expensive hardware or large compute, reduce
scope and state what the smaller experiment can and cannot validate.

#### 11. Counterexamples and falsification

Propose concrete tests, where appropriate, that challenge: - a core
assumption; - generalization to new conditions; - deployment or
long-term reliability.

For each, specify the setup, controlled variable, baseline, metrics,
result that would weaken the claim, and result that would support it.
Prefer falsifiable tests over vague criticism.

#### 12. Follow-up research and independent evidence

Search for direct extensions, independent replications, alternative
methods, criticism, contradictory findings, and open questions.
Distinguish these from papers that merely cite the work. For key
sources, provide title, year, verified author/venue information where
available, link, main finding, and relationship to the paper.

If no relevant follow-up is found, state the search scope and limits; do
not claim that no follow-up exists.

#### 13. Follow-up research idea

Propose a research direction grounded in an identified limitation or
unmet need. It should have a meaningful conceptual difference from the
paper, not merely swap a model or add a component without a clear
rationale.

Include: 1. Evidence-backed motivation. 2. A precise research question.
3. A falsifiable hypothesis. 4. Proposed mechanism and pipeline. 5.
Difference from existing methods. 6. A minimal discriminative
experiment. 7. Baselines and evaluation metrics. 8. Risks and failure
conditions. 9. A novelty check against related literature.

Call it a **candidate research idea** unless novelty has been adequately
established. Do not claim "first" or "world-first" without strong
evidence.

## Beginner-friendly terminology system

### Explain terms at first use

Define unfamiliar or field-specific terms and abbreviations the first
time they matter. This rule applies across domains. Examples of domain-specific terms may include
GNSS, SLAM, IMU, VIO, RTK, VLM, LLM, 3DGS, Benchmark, Agent, Ablation
Study, Pose Estimation, Coordinate Frame, or Reprojection Error when
relevant. Do not add irrelevant terms just to enlarge the glossary.

### Use this explanation pattern

**Term (full English name, if applicable)** - **Plain definition:** What
is it? - **Intuition:** How should a reader think about it? -
**Example:** A concrete scenario. - **Role in this paper:** Why is it
needed? - **Distinction:** How does it differ from easily confused
concepts? - **Mathematics:** Include only when useful.

Prefer this order: intuitive example → plain explanation → technical
definition → relevant mathematics → role in the paper.

### Build a searchable glossary in HTML

Create a glossary based on the paper's actual terminology. Where
practical, support search, topic filters, clickable terms in the body,
and links from definitions back to relevant sections. Explain crucial
terms in the main text as well; do not force readers to jump to the
glossary to understand the argument.

## Interactive HTML requirements

For a full paper-reading request, generate HTML unless the user explicitly requests another format or the environment cannot create files. When HTML is requested, create a real downloadable file. Do not return
only source code or a plan.

### Content and navigation

Include bibliographic details and source links, the central claim, the
13-part analysis, a glossary, relevant figures/tables/equations,
references, and uncertainty notes. Provide a clickable table of
contents, clear section navigation, and a return-to-top control.

### Visualizations

Use visuals that explain the paper, such as architecture diagrams,
pipeline/data-flow diagrams, geometric or mathematical schematics,
experimental charts, baseline comparisons, ablation results, failure
cases, or a follow-up idea diagram.

Prefer embedded SVG, HTML/CSS, or Canvas where appropriate. Label
recreated figures as schematics. Do not present generated concept art as
a paper figure or experimental result.

### Functional interactions

Implement at least three meaningful interactive features when the
content supports them. Examples: - click a pipeline module to inspect
inputs, operations, outputs, and failure modes; - adjust a parameter and
observe a clearly labeled mathematical or simulated consequence; -
switch baselines or experimental conditions; - explore stage-wise
success/error propagation; - expand derivation steps; - search the
glossary; - connect claims to evidence.

Test every control using the available browser or an equivalent runtime. Report untested behavior and dependencies explicitly; do not present a static mockup as an interactive report. Every control must work. Simulated data must be labeled as simulation
and never presented as measured paper results. Avoid interactions that
imply unsupported causality.

### Offline operation and accessibility

Prefer a self-contained HTML file with embedded styles, scripts, SVGs,
glossary data, and core content. Avoid required external JavaScript or
math libraries. Ensure formulas render offline, layouts work on desktop
and mobile, controls have clear labels, and long sections remain
navigable.

Do not reproduce long copyrighted passages when original explanation,
brief quotations, or redrawn diagrams are sufficient. If complete
offline behavior is not possible, disclose the dependency.

## Quality checklist

Before delivery, verify: - bibliographic details and source links; -
actual extent of source access; - all applicable analysis sections; -
first-use explanations for key terms; - mathematical notation and
derivations; - numerical consistency with original figures and tables; -
separation of paper claims, prior work, inference, and hypothesis; -
actionable replication plan; - falsifiable counterexamples; - follow-up
literature and novelty checks; - at least three functioning interactions
where feasible; - simulated results are not presented as measured
evidence; - HTML opens successfully; - desktop and mobile layout; - the
exact output file exists and the download link points to it.

Do not claim a check was performed unless it was actually performed.
Report any incomplete checks.

## Final response

After creating the report, briefly state: 1. What was completed. 2. The
paper's most important findings. 3. Source coverage and remaining
uncertainty. 4. The HTML's interactive features. 5. A working download
link.

Keep the chat response concise enough to make the artifact easy to find;
place the full analysis in the HTML.
