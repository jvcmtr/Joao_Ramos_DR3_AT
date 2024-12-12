export interface Restaurant {
    id: string;
    name: string;
    about: string;
    profileImage: string;
    thumnail: string;
    address: string;
    deliveryFee: string;
    tags: Tag[];
    Items: Item[];
    rating : string;
    contact: CompanyContact
  }

export enum Tag {
    Japanese = "Comida Japonesa",
    FastFood = "Fast Food",
    Italian = "Comida Italiana",
    Pizza = "Pizza",
    Lunch = "Almoço",
    Burger = "Hamburguer"
}

export interface CompanyContact {
    phone : string,
    email : string,
    website : string
}

export interface Item {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  modifications: Modification[];
}

export interface Modification {
    heading: string;
    description: string | null;
    maxChoices: string;
    required: boolean;
    options: Option[];
}

export interface Option {
    name: string;
    obs: string | null;
    extraPrice: string;
    image: string | null;
    maxAmmount: number;
    ammount?: number;
}
  
  