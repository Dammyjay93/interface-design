# Interface Design - Architecture Diagrams

## Claude Code Plugin Architecture

```mermaid
graph TB
    subgraph Claude Code
        User[User Request]
        Plugin[interface-design Plugin]
        Skill[.claude/skills/SKILL.md]
        Commands[.claude/commands/]
        System[.interface-design/system.md]
        Output[UI Code]

        User --> Plugin
        Plugin --> Skill
        Plugin --> Commands
        Plugin --> System
        Plugin --> Output
    end

    subgraph Commands
        Init[/interface-design:init/]
        Status[/interface-design:status/]
        Audit[/interface-design:audit/]
        Extract[/interface-design:extract/]
        Critique[/interface-design:critique/]
    end

    subgraph References
        Principles[principles.md]
        Validation[validation.md]
        CritiqueRef[critique.md]
        Example[example.md]
    end

    Skill --> Principles
    Skill --> Validation
    Skill --> CritiqueRef
    Skill --> Example
```

## Roo Code Mode Architecture

```mermaid
graph TB
    subgraph Roo Code
        User[User Request]
        Mode[interface-design Mode]
        Roomodes[.roomodes]
        System[.interface-design/system.md]
        Docs[docs/interface-design/]
        Output[UI Code]

        User --> Mode
        Mode --> Roomodes
        Mode --> System
        Mode --> Docs
        Mode --> Output
    end

    subgraph Mode Operations
        Status[Show Status]
        Audit[Audit Code]
        Extract[Extract Patterns]
        Critique[Critique Build]
    end

    subgraph Documentation
        Principles[principles.md]
        Template[system-template.md]
        Examples[examples/]
    end

    Mode --> Status
    Mode --> Audit
    Mode --> Extract
    Mode --> Critique
    Mode --> Principles
    Mode --> Template
    Mode --> Examples
```

## Workflow Comparison

### Claude Code Workflow

```mermaid
sequenceDiagram
    participant U as User
    participant C as Claude Code
    participant P as Plugin
    participant S as system.md

    U->>C: /interface-design:init
    C->>P: Load SKILL.md
    P->>P: Read principles
    P->>S: Check for system.md
    alt system.md exists
        P->>S: Load patterns
        P->>C: Apply patterns
    else no system.md
        P->>U: Suggest direction
        U->>P: Confirm
    end
    P->>C: Build with principles
    C->>U: Show output
    P->>U: Offer to save
```

### Roo Code Workflow

```mermaid
sequenceDiagram
    participant U as User
    participant R as Roo Code
    participant M as interface-design Mode
    participant S as system.md

    U->>R: Switch to interface-design mode
    R->>M: Load mode instructions
    M->>S: Check for system.md
    alt system.md exists
        M->>S: Load patterns
        M->>R: Apply patterns
    else no system.md
        M->>U: Suggest direction
        U->>M: Confirm
    end
    U->>R: Build UI component
    M->>R: Apply principles
    R->>U: Show output
    M->>U: Offer to save
```

## System File Structure

```mermaid
graph LR
    subgraph .interface-design/system.md
        Direction[Direction]
        Tokens[Tokens]
        Patterns[Patterns]
        Decisions[Decisions]
    end

    subgraph Direction
        Personality[Personality]
        Foundation[Foundation]
        Depth[Depth]
    end

    subgraph Tokens
        Spacing[Spacing]
        Colors[Colors]
        Radius[Radius]
        Typography[Typography]
    end

    subgraph Patterns
        Button[Button]
        Card[Card]
        Input[Input]
    end

    Direction --> Tokens
    Tokens --> Patterns
```

## Design Principles Hierarchy

```mermaid
graph TB
    subgraph Core Philosophy
        Intent[Intent First]
        Choice[Every Choice Must Be A Choice]
        Sameness[Sameness Is Failure]
    end

    subgraph Craft Foundations
        Layering[Subtle Layering]
        Expression[Infinite Expression]
        Color[Color Lives Somewhere]
    end

    subgraph Design Principles
        Tokens[Token Architecture]
        Spacing[Spacing System]
        Depth[Depth Strategy]
        Typography[Typography]
        Layouts[Card Layouts]
    end

    subgraph Quality Checks
        Swap[Swap Test]
        Squint[Squint Test]
        Signature[Signature Test]
        Token[Token Test]
    end

    Intent --> Layering
    Intent --> Expression
    Intent --> Color
    Choice --> Tokens
    Choice --> Spacing
    Choice --> Depth
    Sameness --> Typography
    Sameness --> Layouts

    Layering --> Swap
    Expression --> Signature
    Color --> Token
```

## File Mapping

```mermaid
graph LR
    subgraph Claude Code
        C1[.claude/skills/SKILL.md]
        C2[.claude/commands/]
        C3[.claude/skills/references/]
        C4[reference/]
    end

    subgraph Roo Code
        R1[.roomodes]
        R2[docs/interface-design/]
        R3[docs/interface-design/examples/]
    end

    C1 --> R1
    C2 --> R1
    C3 --> R2
    C4 --> R2
```
