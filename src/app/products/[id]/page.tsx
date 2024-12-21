
"use client"


import Wrapper from '@/components/shareable/Wrapper';
import Image from 'next/image';


const products = [
  {
    id: 1,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p1.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },
  {
    id: 2,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p2.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },

  {
    id: 3,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p3.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },
  {
    id: 4,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p4.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },
  {
    id: 5,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p5.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },
  {
    id: 6,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p6.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },
  {
    id: 7,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p7.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },
  {
    id: 4,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p4.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },




  {
    id: 8,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p8.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },


  {
    id: 9,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p9.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },


  {
    id: 10,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p10.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },


  {
    id: 12,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p12.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },
  {
    id: 13,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p13.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },
  {
    id: 14,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p14.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },



  {
    id: 15,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p15.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },


  {
    id: 16,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p6.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
    button: "Add Cart",
  },
  {
    id: 17,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p17.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  },



  {
    id: 18,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p18.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  }
  ,



  {
    id: 19,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p19.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  }
  ,



  {
    id: 20,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p20.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  }
  ,



  {
    id: 21,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p21.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  }
  ,



  {
    id: 22,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p22.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  }
  ,



  {
    id: 23,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p23.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  }

  ,



  {
    id: 24,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p24.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  }


  ,



  {
    id: 26,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p26.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  },
  {
    id: 27,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p27.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  },
  {
    id: 28,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p28.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  },
  {
    id: 29,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p29.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  },
  {
    id: 30,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p30.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  },

  {
    id: 31,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p31.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  },
  {
    id: 32,
    header: "Nike Air Force 1 PLT.AF.ORM",
    image: "/p32.png",
    description:
      "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
      button: "Add Cart",
  }


];

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  
  const productId = parseInt(params.id, 10);

  
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Wrapper>
    <div className='flex flex-col md:flex-row  justify-center items-center gap-6 mt-9'>
    <div>
      <Image src={product.image} alt={product.header} height={653} width={653} />
      </div>
      <div>
      <h3 className='font-bold text-2xl '>{product.header}</h3>
      <p className='mt-3'>{product.description}</p>
      <button className='px-7 py-2 bg-black text-white rounded-xl mt-6 text-xl  hover:scale-105 duration-300'>{product.button}</button>
      </div>
    </div>
    </Wrapper>
  );
};

export default ProductDetailPage;
