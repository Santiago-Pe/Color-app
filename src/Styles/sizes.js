// Small devices (landscape phones, 576px and up)
//@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
//@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
//@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
//@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
//@media (min-width: 1400px) { ... }
const media_query = {
    up() {

    },
    down(size){
        const sizes = {
            xs: "576px",
            sm: "768px",
            md: "992px",
            lg: "1200px",
            xl: '1600px'

        }
        return `@media (max-width: ${sizes[size]})`
    }
}


export default  media_query


