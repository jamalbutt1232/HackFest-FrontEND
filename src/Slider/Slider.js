import React , {useState , useEffect} from 'react'


const Slider = () => {
    const imagesList = [
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ,
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ,
        "https://images.pexels.com/photos/5043840/pexels-photo-5043840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
     ];
    const [imageIndex , setImageIndex] = useState(0)
    const [image , setImage] = useState(imagesList[imageIndex])

    const checkImageIndex = ()=>{
        console.log(imageIndex)
        if (imageIndex ==2  ){
            setImageIndex(0)
        }else{
            setImageIndex(imageIndex+1)
        }
    }

    const checkImageIndexLeftClicked = ()=>{
        console.log(imageIndex)
        if (imageIndex ==0){
            setImageIndex(2)
        }else{
            console.log("IN IMAGE")
            setImageIndex(imageIndex-1)
        }
    }
    
    // setTimeout(() => {
    //     console.log("imageIndeximageIndeximageIndeximageIndeximageIndeximageIndex :"  +imageIndex)
    //     checkImageIndex()
    //     setImage(imagesList[imageIndex])
    // }, 
    // 10000);

    const showNextImage= ()=>{
        checkImageIndex()
        setImage(imagesList[imageIndex])
    }

    const showPreviousImage= ()=>{
        console.log("imageIndex :"  + imageIndex)
        checkImageIndexLeftClicked()
        setImage(imagesList[imageIndex])
    }
    
    return (
        <div style={{position:'relative'}}>
            <div style={{   position: 'absolute'  , top:"6.5%" , 
            fontSize:56 , fontFamily:"fantasy"  , width:"100%" 
             }}><p style={{color:"#764cba" , backgroundColor:"#e6e6e6", textAlign:"center" ,
              borderWidth:50 , borderRadius:100 }}>A cut above the rest</p></div>

        <div style={{   
            position: 'absolute'  , 
             right:5   , top:"50%" , backgroundColor:"gray" , borderRadius:100 
             }}><img style={{
              height:50 , width:50 , padding:10 }} 
              src="https://pngimage.net/wp-content/uploads/2018/05/double-arrow-symbol-png-6.png"
              onClick={()=>{showNextImage()}}
              /></div>
        <div style={{   
            position: 'absolute'  , 
            left:5   , top:"50%" , backgroundColor:"gray" , borderRadius:100 
             }}><img style={{
              height:50 , width:50 , padding:10 }} 
              src="https://www.pngarts.com/files/2/Left-Arrow-PNG-Download-Image.png"
              onClick={()=>
                showPreviousImage()   
            }
              /></div>

            <img src={imagesList[imageIndex]} style={{ width:"100%" ,height:860 ,objectFit:"cover"   }} />

            
        </div>
    )
}

export default Slider
