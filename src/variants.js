const textVariant= {
    initial: {
        x:-60,
        opacity: 0
    },
    animate: {
        x:0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
            
        }
    },
    exit: {
        x:-60,
        opacity: 0,
    }
}

const imageVariant =  {
    initial: {
       
        opacity: 0
    },
    animate: {
        
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut',
        }
    },
    exit: {
        opacity: 0
        
    }

}

export {textVariant, imageVariant}