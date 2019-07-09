const Home = ({ name }) => <div>Comments of {name}</div>

Home.getInitialProps = ({ query }) => {
  const { name } = query
  return { name }
}

export default Home
