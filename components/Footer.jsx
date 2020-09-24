import React from 'react'

const Footer = () => (
  <footer>
    <a href="https://vercel.com?utm_source=data2thepeople-org&utm_campaign=oss">
      Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
    </a>
    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      footer img.logo {
        margin-left: 0.5rem;
        height: 1em;
      }
      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </footer>
)

export default Footer
