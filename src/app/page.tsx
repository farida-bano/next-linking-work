import Link from 'next/link'
const MainPage =()=>{
  return(
  < >
  <h1>this is home page</h1>
  <Link href ='/apply'> go to apply page </Link><br/>
  <Link href ='/jobs'>go to jobs page </Link><br/>
  <Link href ='/contact'>go to contact page </Link>
  </>
  );
}
export default MainPage
