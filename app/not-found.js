import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ padding: '140px 2rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Page Not Found</h1>
      <p>We couldn&apos;t find the page you were looking for.</p>
      <p>
        <Link href="/">Return to homepage</Link>
      </p>
    </div>
  )
}
  