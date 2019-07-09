const Home = ({ name }) => <div>Homepage of {name}</div>

Home.getInitialProps = ({ query }) => {
  const { name } = query
  return { name }
}

export default Home
