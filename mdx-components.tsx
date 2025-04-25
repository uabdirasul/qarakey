import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "1rem 0",
          lineHeight: "2rem"
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "1rem 0" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1rem 0" }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 style={{ fontSize: "1.3rem", fontWeight: "bold", margin: "1rem 0" }}>
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: "1rem 0" }}>
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol style={{ paddingLeft: "1.5rem", listStyleType: "decimal" }}>
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li style={{ margin: "0.5rem 0", fontSize: "1rem", lineHeight: "1.6" }}>
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #ccc",
          paddingLeft: "1rem",
          color: "#555",
          margin: "1rem 0",
          fontStyle: "italic"
        }}
      >
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code
        style={{
          backgroundColor: "#f5f5f5",
          padding: "0.2rem 0.4rem",
          borderRadius: "4px",
          fontSize: "0.9rem",
          fontFamily: "monospace",
          color: "#000"
        }}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre
        style={{
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          borderRadius: "4px",
          overflowX: "auto",
          fontSize: "0.9rem",
          fontFamily: "monospace"
        }}
      >
        {children}
      </pre>
    ),
    a: ({ children, ...props }) => (
      <a style={{ color: "#0070f3", textDecoration: "underline" }} {...props}>
        {children}
      </a>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "4px"
        }}
        {...(props as ImageProps)}
      />
    ),
    ...components
  };
}
