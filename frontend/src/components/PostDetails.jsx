import gl from "../assets/gl.jpg";

const PostDetails = ({setToggle}) => {
  return (
    <div>
    <div className="fixed inset-0 bg-black/90"></div>
      <div className="flex w-[60%] flex-col mx-auto bg-white rounded-lg relative">
        <button className="absolute text-black flex justify-end w-full p-3" onClick={()=>setToggle(false)} >
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} stroke="currentColor" 
            className="size-6">
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-4xl font-semibold p-10">
          <h1>HELLO WORLD</h1>
        </div>
        <div className="flex justify-center px-10 ">
          <img src={gl} className="rounded-lg" />
        </div>
        <div className="p-10 pt-0">
          
          <div className="py-4 text-lg font-medium">
            <p>Author: Athesh A</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus
              nihil tempore magni fugiat praesentium laudantium voluptate
              doloribus corrupti eius, facilis, laboriosam quos. Ad rerum quas
              nemo odit magnam dolorem nostrum quis vel quo, sit, laudantium magni
              accusamus, quam tempora quidem! Ratione fugiat debitis vero cum non
              repellendus, laudantium iste placeat, fugit eligendi necessitatibus
              perferendis earum est totam eum cupiditate tempore ut quaerat
              voluptates hic harum? Labore iusto veniam corrupti quis tempora
              consequuntur debitis soluta sed vitae amet laborum accusamus
              voluptatem quae doloribus mollitia nemo, ipsum quo non dicta itaque
              doloremque quia! Impedit at assumenda magnam, repellat pariatur
              accusantium doloribus fuga dolorem aperiam ipsum. Rem quaerat
              cupiditate at nam dolorem id perferendis ad, corrupti quas!
              Molestiae doloribus facilis neque eaque ex maiores iure odit a vitae
              suscipit. Voluptatem accusantium, ipsa quia pariatur labore beatae
              harum obcaecati! Porro ex libero deleniti nulla molestiae
              exercitationem quae fugit facilis delectus. Praesentium inventore
              doloremque repellendus beatae veritatis debitis numquam tempore sit
              blanditiis illum at, incidunt ad voluptatum laboriosam laborum
              repellat sapiente. Quod corporis voluptatibus eum autem culpa,
              veniam possimus, sed odit vitae, dolorum tempora voluptatum ad sequi
              accusantium velit nisi ipsa impedit ex modi inventore placeat?
              Mollitia, voluptates quibusdam! Autem doloribus mollitia facilis
              qui?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
