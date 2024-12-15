const restaurants = [
    "https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDlj-z_iovzwwUzzLvye2vxgHOpIoJ69vVg&s",
    "https://i.ytimg.com/vi/AUml2IgSFCQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwIEOu4m-XkablSAvVHBwejs3Q4Q",
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4293d8110142211.5fe4b63868448.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_hboLdB6fO5LO0V8gA4osiWv0DS4DF9E0A&s",
    "https://w7.pngwing.com/pngs/524/137/png-transparent-restaurant-logo-illustration-gluten-free-diet-logo-celiac-disease-wheat-restaurant-logo-emblem-food-free-logo-design-template-thumbnail.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZukAFbJWDVY3kUyHihPaBcVBoBzlF90rI7g&s",
    "https://files.menudino.com/cardapios/32096/logo.png"

]

const foods = [
    "https://img.freepik.com/fotos-gratis/hamburguer-de-carne-grelhada-com-batatas-fritas-queijo-e-tomate-generative-ai_188544-8466.jpg?semt=ais_hybrid",
    "https://cdn.media.amplience.net/i/japancentre/Blog-page-156-sushi/Blog-page-156-sushi?$poi$&w=556&h=391&sm=c&fmt=auto",
    "https://www.foodandwine.com/thmb/BrmZmhpdpeUyKCoZIcSpwEQxYiM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Soba-and-Zucchini-Salad-with-Gochujang-Dressing-FT-RECIPE0622-a392fb1488e443ac95b7f35a92cef5e9.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKr5qfktrBoqDirKLtq5TDX95GCUArNnEufw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90TcQpOUOziIj4xyH8rgmIsC3JJQ-NMEK6g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IGVt0H7fKuOtrbzhrcCn40PJB_UunB5LSg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYluvFpBe1MaEf7lAJ3Ds0Br2ifNS-X2s0w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8XFn5KrZVfTao3xZ7FXoy1pKL9DG5ryXJQ&s",
]


const randItem = (arr) => arr[ Math.floor(Math.random() * arr.length) ];
  
export const getRandFood = () => randItem(foods)
export const getRandRestaurant = () => randItem(restaurants)