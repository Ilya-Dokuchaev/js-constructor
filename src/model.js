import image from "./assets/image.png";
import {
  TextBlock,
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
} from "../classes/blocks";
const text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae voluptate obcaecati aspernatur repudiandae quidem soluta reprehenderit et, autem voluptatum consequuntur non quod tenetur ipsum. In ea nisi tenetur eum recusandae tempora, sequi iste pariatur ipsa quibusdam nobis, quas repellat? Obcaecati esse rem iure consequuntur ratione aperiam quo consectetur vero. Assumenda.";
//описываем модель через объект
export const model = [
  new TitleBlock("Конструктор сайтов на чистом JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right,#ff0099,#493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left,#f2994a,#f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
  new ColumnsBlock(
    [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sequi, architecto corporis quas maiores quidem? Atque praesentium quo dicta labore quos at quae ipsum reiciendis molestias provident quia animi, ad, alias rem odio obcaecati esse minima voluptatem corporis nobis laboriosam deserunt sunt ut nemo. Doloremque magni dignissimos obcaecati soluta voluptas, quae velit omnis expedita aut quo, voluptatibus voluptatem eos delectus iusto earum quia rerum laborum accusamus nesciunt qui? Assumenda in sequi voluptatum provident unde illum molestiae deserunt. Nulla adipisci tempora maiores facere deleniti nobis culpa excepturi fugiat laborum sint? Fugit at dolorem, laborum minus vel laboriosam architecto dolores voluptate voluptatum!",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sequi, architecto corporis quas maiores quidem? Atque praesentium quo dicta labore quos at quae ipsum reiciendis molestias provident quia animi, ad, alias rem odio obcaecati esse minima voluptatem corporis nobis laboriosam deserunt sunt ut nemo. Doloremque magni dignissimos obcaecati soluta voluptas, quae velit omnis expedita aut quo, voluptatibus voluptatem eos delectus iusto earum quia rerum laborum accusamus nesciunt qui? Assumenda in sequi voluptatum provident unde illum molestiae deserunt. Nulla adipisci tempora maiores facere deleniti nobis culpa excepturi fugiat laborum sint? Fugit at dolorem, laborum minus vel laboriosam architecto dolores voluptate voluptatum!",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sequi, architecto corporis quas maiores quidem? Atque praesentium quo dicta labore quos at quae ipsum reiciendis molestias provident quia animi, ad, alias rem odio obcaecati esse minima voluptatem corporis nobis laboriosam deserunt sunt ut nemo. Doloremque magni dignissimos obcaecati soluta voluptas, quae velit omnis expedita aut quo, voluptatibus voluptatem eos delectus iusto earum quia rerum laborum accusamus nesciunt qui? Assumenda in sequi voluptatum provident unde illum molestiae deserunt. Nulla adipisci tempora maiores facere deleniti nobis culpa excepturi fugiat laborum sint? Fugit at dolorem, laborum minus vel laboriosam architecto dolores voluptate voluptatum!",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom,#8e2de2,#4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "Это Картинка ",
  }),
];
