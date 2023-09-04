
import styled from 'styled-components'
import Header from '../Header'
import img from "../Assets/uniAbuja.jpeg"
import Footer from '../Footer/Footer'
import { useQuery } from "@tanstack/react-query"
import { ReadImage } from '../Apis/ApiCalls'


const Gallery = () => {

  
  const data = useQuery({
    queryFn: ReadImage,
    queryKey : ["allImages"]
  })

  console.log(data)

  return (
    <Container>
      <Header />
          <Wrapper>
        <Top>
          <Img src={img} />
          <Left>
            <Text>Hello Welcome to <span>Center for Undergraduate Research</span> photo gallery with memories and events coming up</Text>
          </Left>
        </Top>
         
          <Down>
          {
            data?.data?.data.map((e: any) => (
              <Box key={e._id}>
                <Up>
                    <Imgs  src={e.GalleryImage}/> 
                </Up>
            </Box>
            ))
             }
          
        </Down>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Gallery
const Imgs = styled.img`
    transition: all 350ms;
    object-fit: contain;
    width: 100%;
    height: 500px;
    cursor: pointer;
    /* :hover{
        display: block;
        transform: scale(1.1);
        background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.9));
        z-index: 1;
        filter: grayscale(3);
    } */
    @media screen and (max-width: 500px) {
      height: 1000px;
      margin-top: -430px;
    }
`
const Up = styled.div`
    width: 100%;
    height: 130px;
    border-radius: 10px;
    /* overflow: hidden; */
    :hover{
        
    }
`
const Box = styled.div`
    width: 570px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin: 5px;
    margin-bottom: 35px;
    @media screen and (max-width: 1024px) {
        width: 440px;
    }
    @media screen and (max-width: 768px) {
        width: 320px;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
        background-color: #e2e1e1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
    }


`

const Down = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`
const Text = styled.div`
  font-size: 18px;
  width: 480px;
  text-align: center;
   @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 100%;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  }
  span{
    color: #219653;
    font-size: 20px;
  }
`
const Left = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Img = styled.img`
  height: 150px;
  
`
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  padding-top: 50px;
  padding-bottom: 90px;
  flex-wrap: wrap;
  @media screen and (max-width: 425px) {
    padding-top: 10px;
  }
`
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: red; */
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`