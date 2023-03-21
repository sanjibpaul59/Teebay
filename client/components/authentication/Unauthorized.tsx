import { Container } from "@mantine/core";
import Link from "next/link";

export default function Unauthorized() { 
  return (
    <Container>
      <h1>You must be logged in to view this page</h1>
      <Link href="/auth">Login</Link>
    </Container>
  )
}