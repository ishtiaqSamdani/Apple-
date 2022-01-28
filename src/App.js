import logo from "./logo.svg";
import ipad from "./ipadpro.jpg";
import { useState} from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(1);
  let position=1;
  const handleScroll = () => {
   position = window.pageYOffset;
   if(position/100>=1){
     setScrollPosition(position/100);
   }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="head_wrap">
        <div className="wrap">
          <img className="img_ipad" style={{"--p":`${scrollPosition.toString()}`}}  src={ipad} alt="" />
          <p className="content_ipad">I am Iron Man</p>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet
        aliquid ut. Temporibus placeat autem tenetur doloribus explicabo,
        tempore delectus minus odit ad? Dolores, voluptatum quam ratione
        veritatis accusantium enim! Ea odit veniam unde quibusdam porro
        perspiciatis repellendus sunt magnam maiores. Animi omnis, odit maxime
        eaque beatae, iure esse, alias ex nam sit eum. Id voluptatem veniam,
        molestiae voluptas quae dolor porro necessitatibus perferendis laborum
        cumque vel saepe! Ea sint sapiente tenetur ipsam eveniet dolores fugit
        aliquid excepturi! Nisi consectetur in, alias placeat suscipit et iure?
        Ducimus inventore tenetur quaerat voluptatem molestias id exercitationem
        cumque nulla, ad minima, delectus sint culpa repudiandae fugit magni ab
        ea suscipit sequi tempore dolorum iste? Unde aliquid ut aperiam culpa
        consequatur repudiandae inventore recusandae vitae minima blanditiis
        laboriosam impedit incidunt praesentium excepturi eligendi ducimus
        commodi, officia doloremque libero accusantium iusto. Id sunt fugiat
        ipsa quibusdam modi, voluptatum atque rerum cupiditate ut nisi qui et a
        esse, illum dicta dolorem possimus maiores! Nam dolores, accusamus totam
        cum temporibus ullam facere alias optio voluptas tempora nobis, saepe
        sint cumque neque sequi molestiae similique ad aliquam hic odio
        praesentium molestias placeat natus? Eligendi hic molestias deleniti
        sapiente culpa? Ex eligendi, sunt voluptatum accusamus veritatis illum
        ut magnam quae molestiae, at assumenda architecto fuga dolorum doloribus
        nobis reiciendis perspiciatis maxime, quibusdam dignissimos voluptate
        repellendus autem. Praesentium harum repellendus illo officia minus
        laboriosam recusandae, ratione aspernatur. Perferendis beatae quaerat
        molestias, iusto molestiae cupiditate eveniet perspiciatis fugiat
        ratione aliquam dolore numquam aperiam reiciendis, explicabo officiis
        voluptatum odit eos porro animi sunt quasi est aut? Quisquam, reiciendis
        maxime obcaecati saepe, expedita nihil corporis, ipsum quis fugit
        aperiam autem aut! Corrupti nobis est asperiores officia placeat
        voluptatem facere adipisci at esse ducimus consequatur deserunt, tempora
        repellendus maxime ipsum. Magni tempora, totam harum earum eveniet
        perspiciatis sit natus voluptatem consectetur fugit? Eveniet omnis
        repellat, porro, ut esse natus nesciunt quidem libero quae delectus
        voluptates sapiente vel? Quis facilis numquam repellendus iusto
        repudiandae a est inventore, minus magni tempore ad fugit! Neque earum
        accusamus nemo voluptatem aperiam quod repellat magni possimus labore
        magnam illum consequatur officiis, harum praesentium odio autem corporis
        repudiandae. Assumenda vero reiciendis odit ducimus quisquam alias ex
        sit excepturi tempore pariatur, dolorum atque maiores. Eveniet sit odit
        ullam? Omnis veritatis soluta non temporibus, quam provident fuga sit
        sint eligendi placeat laboriosam ratione tempora quaerat nihil. Corrupti
        cumque sit provident culpa voluptate esse ratione eaque, accusantium
        saepe eos neque consequuntur soluta numquam nemo incidunt! Nobis
        voluptatum quaerat ex, accusamus explicabo consequatur molestias vel
        sunt itaque fugiat consectetur facilis sapiente quisquam soluta?
        Temporibus totam alias aspernatur laborum reiciendis consequatur, ea,
        numquam nesciunt minima vitae, accusamus veniam nisi amet voluptatibus
        et! Enim deserunt magnam nihil, excepturi rerum sapiente a ex molestias
        accusantium. Voluptatem, maxime exercitationem quibusdam vel
        voluptatibus animi laboriosam ipsum ad odio facere porro, amet deserunt
        excepturi sint praesentium labore dicta, beatae ut dolorem! Asperiores
        labore dignissimos quia ducimus beatae dolores minus dolorum eum
        suscipit ipsum, tenetur non aliquid alias omnis. Consequatur error qui
        veritatis architecto enim, maxime commodi est esse culpa eos autem.
        Exercitationem repellendus soluta ab et sequi quod esse cupiditate
        provident magnam? Necessitatibus repellendus nisi, quam aliquam odio
        facilis magnam laudantium hic consectetur, recusandae distinctio
        blanditiis iusto, maxime quibusdam! Adipisci modi maiores consequuntur
        totam veritatis. Asperiores nostrum alias aspernatur, suscipit nesciunt
        aliquid numquam iusto iste qui a eos illo reiciendis provident tempora
        magnam illum totam. Consequatur, mollitia debitis. Tempora nesciunt ea
        ratione esse. Nulla, quisquam odio nam est ad debitis inventore, error
        voluptas quas voluptate amet soluta doloribus fugiat, corporis molestiae
        animi molestias consequuntur? Eum quod earum beatae aliquam perspiciatis
        hic, saepe debitis deserunt, fugiat fuga accusantium excepturi,
        distinctio omnis corrupti ex sit eos officiis odio soluta! Iure magni
        eos ipsa suscipit quae laboriosam delectus ut ad placeat, voluptatum
        sequi corrupti id provident nesciunt perspiciatis nobis impedit! Ab
        mollitia, cum quaerat repellendus iusto eius possimus dolores aspernatur
        at molestiae illo accusantium voluptatem culpa nam officia dolorum,
        debitis provident dolorem alias quae consectetur suscipit deserunt
        soluta? Veritatis necessitatibus dolorum, itaque minus, voluptates
        cupiditate reprehenderit aspernatur soluta accusamus exercitationem
        impedit pariatur ratione facere at unde obcaecati nobis possimus.
        Aliquid ad labore assumenda, et reprehenderit delectus fugiat obcaecati
        tempore itaque, at eius! Expedita, rerum eum magni provident nam quos
        voluptatem! Optio eveniet vero, deleniti, ipsam, neque illo recusandae
        quasi sit adipisci nulla non possimus totam et tempore officiis cumque
        commodi dolorum esse. Quasi facere eveniet veritatis commodi voluptates
        magnam exercitationem aperiam sint dolore id nemo dolor modi placeat
        dolorem, ducimus nulla porro, quae eligendi mollitia vero, amet sed!
        Illo debitis nostrum sapiente praesentium voluptates, labore aliquid
        quidem voluptatem quam inventore quae ab, distinctio repellendus
        assumenda et ea expedita laboriosam modi excepturi, illum perspiciatis
        corporis tempore qui saepe! Nemo voluptatem atque debitis qui
        consequuntur impedit non, similique nihil sequi aperiam, odit
        voluptatibus vero. Fuga distinctio quisquam eveniet? Ullam, veritatis?
        Provident eveniet eos modi fugit maxime, dolorem ab voluptates hic
        totam, quia molestias exercitationem fugiat reprehenderit facere, culpa
        neque veritatis earum aliquam doloribus sapiente ratione cum! Possimus
        magni vero repellendus laborum molestias doloremque est impedit
        incidunt! At doloremque commodi laudantium voluptas porro magni velit
        earum error enim, maiores eos nulla dolores temporibus? Beatae quas
        consectetur porro architecto dolore temporibus, recusandae tempora,
        maiores culpa facere enim. Neque aspernatur fugit magnam sequi
        consectetur provident, culpa maiores laudantium quia. Pariatur ut
        laudantium sit. Obcaecati eum ab, dignissimos animi nemo eos ullam nihil
        suscipit quasi quo, nostrum doloremque nesciunt voluptas modi, minima
        vel atque. Provident optio vitae aliquam, quo adipisci temporibus iste
        esse nulla accusamus excepturi rerum officiis facilis, similique ullam.
        Vel provident suscipit deleniti veritatis et cumque adipisci, sint ipsam
        aspernatur impedit rem molestiae ab porro, harum repellat, obcaecati
        saepe asperiores est debitis? Quod consectetur non illo sed quasi.
        Voluptatibus debitis molestias porro ea aspernatur aliquam voluptatem
        fuga. Molestias culpa similique reiciendis nesciunt et. Necessitatibus
        vel id unde natus, debitis labore et? Qui beatae eligendi at laboriosam
        tempora eaque. Veritatis et, cupiditate reprehenderit ipsa adipisci
        voluptatem, commodi rem illo explicabo nostrum velit laborum aliquid!
        Maiores architecto vel placeat a ducimus eum hic mollitia assumenda
        deserunt ut! Voluptatum, praesentium?
      </div>
    </>
  );
}

export default App;
