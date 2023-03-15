import {Link} from '@remix-run/react'

export default function Index() {
  return (
    <div className="container mx-auto bg-slate-50 sm:px-6 lg:px-8">
      <section className="prose prose-slate py-6 dark:prose-invert">
        <h1>H1 Header</h1>
        <h2>H2 Header</h2>
        <h3>H3 Header</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          facilis odit fugit obcaecati qui vero maxime dolores. Ad quis
          veritatis fugit aspernatur unde iusto, ipsam, accusantium quo
          asperiores, rem libero.
        </p>

        <Link to="/">Home</Link>
      </section>
    </div>
  )
}
