import logo from "./logo.svg";
import ipad from "./ipadpro.jpg";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(1);
  const [yAxis, setyAxis] = useState(0);
  const [imgSize, setimgSize] = useState(1);
  const [var3, setvar3] = useState(1);
  let position = 1;
  const handleScroll = () => {
    position = window.pageYOffset;
    if (Math.abs(position / 100) >= 1) {
      setvar3(var3 * 1.6);
      setScrollPosition(position / 100);
      setyAxis(position / 100 - 1);
      setimgSize(100 / position + var3);
    }
    console.log(position);
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
          <img
            className="img_ipad"
            style={{
              "--p": `${scrollPosition.toString()}`,
              "--v": `${yAxis.toString()}`,
            }}
            src={ipad}
            alt=""
          />
          <div
            className="content_ipad"
            style={{ "--img-size": `${imgSize.toString()}` }}
          >
            TONY STARK
          </div>
            <span className="content_para">I am Iron Man</span>

        </div>
      </div>
      <div className="content_of_iron_man">
        Iron Man is a superhero appearing in American comic books published by
        Marvel Comics. The character was co-created by writer and editor Stan
        Lee, developed by scripter Larry Lieber, and designed by artists Don
        Heck and Jack Kirby. The character made his first appearance in Tales of
        Suspense #39 (cover dated March 1963), and received his own title in
        Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers
        alongside Thor, Ant-Man, Wasp and the Hulk. A wealthy American business
        magnate, playboy, philanthropist, inventor and ingenious scientist,
        Anthony Edward "Tony" Stark suffers a severe chest injury during a
        kidnapping. When his captors attempt to force him to build a weapon of
        mass destruction, he instead creates a mechanized suit of armor to save
        his life and escape captivity. Later, Stark develops his suit, adding
        weapons and other technological devices he designed through his company,
        Stark Industries. He uses the suit and successive versions to protect
        the world as Iron Man. Although at first concealing his true identity,
        Stark eventually publicly reveals himself to be Iron Man. Initially,
        Iron Man was a vehicle for Stan Lee to explore Cold War themes,
        particularly the role of American technology and industry in the fight
        against communism. Subsequent re-imaginings of Iron Man have
        transitioned from Cold War motifs to contemporary matters of the
        time.[1] Throughout most of the character's publication history, Iron
        Man has been a founding member of the superhero team the Avengers and
        has been featured in several incarnations of his own various comic book
        series. Iron Man has been adapted for several animated TV shows and
        films. In the Marvel Cinematic Universe, the character was portrayed by
        Robert Downey Jr., appearing in the films Iron Man (2008), The
        Incredible Hulk (2008) in a cameo, Iron Man 2 (2010), The Avengers
        (2012), Iron Man 3 (2013), Avengers: Age of Ultron (2015), Captain
        America: Civil War (2016), Spider-Man: Homecoming (2017), Avengers:
        Infinity War (2018) and Avengers: Endgame (2019). The character also
        appeared in Spider-Man: Far From Home (2019). Iron Man was ranked 12th
        on IGN's "Top 100 Comic Book Heroes" in 2011[2] and third in their list
        of "The Top 50 Avengers" in 2012.[3]
      </div>
      <hr />
      <div className="content_of_iron_man">
        Origins Anthony Edward Stark is the son of wealthy industrialist and
        head of Stark Industries, Howard Stark, and Maria Stark. A boy genius,
        he enters MIT at the age of 15 to study engineering and later receives
        master's degrees in engineering and physics. After his parents are
        killed in a car accident, he inherits his father's company. Stark is
        injured by a booby trap and captured by enemy forces led by Wong-Chu.
        Wong-Chu orders Stark to build weapons, but Stark's injuries are dire
        and shrapnel is moving towards his heart. His fellow prisoner, Ho
        Yinsen, a Nobel Prize-winning physicist whose work Stark had greatly
        admired during college, constructs a magnetic chest plate to keep the
        shrapnel from reaching Stark's heart. In secret, Stark and Yinsen use
        the workshop to design and construct a suit of powered armor, which
        Stark uses to escape. During the escape attempt, Yinsen sacrifices his
        life to save Stark's by distracting the enemy as Stark recharges. Stark
        takes revenge on his kidnappers and rejoins the American forces, on his
        way meeting a wounded American Marine fighter pilot, James "Rhodey"
        Rhodes. Back home, Stark discovers that the shrapnel fragment lodged in
        his chest cannot be removed without killing him, and he is forced to
        wear the armor's chestplate beneath his clothes to act as a regulator
        for his heart. He must recharge the chestplate every day or else risk
        the shrapnel killing him. The cover story that Stark tells the news
        media and general public is that Iron Man is his robotic personal
        bodyguard, and corporate mascot. To that end, Iron Man fights threats to
        his company (e.g., Communist opponents Black Widow, the Crimson Dynamo,
        and the Titanium Man), as well as independent villains like the Mandarin
        (who becomes his greatest enemy). No one suspects Stark of being Iron
        Man, as he cultivates a strong public image of being a rich playboy and
        industrialist. Two notable members of the series's supporting cast, at
        this point, are his personal chauffeur Harold "Happy" Hogan, and
        secretary Virginia "Pepper" Potts—to both of whom he eventually reveals
        his dual identity. Meanwhile, James Rhodes finds his own niche as
        Stark's personal pilot, ultimately revealing himself to be a man of
        extraordinary skill and daring in his own right. The series took an
        anti-Communist stance in its early years, which was softened as public
        (and therefore, presumably, reader) opposition rose to the Vietnam
        War.[5] This change evolved in a series of storylines featuring Stark
        reconsidering his political opinions, and the morality of manufacturing
        weapons for the U.S. military. Stark shows himself to be occasionally
        arrogant, and willing to act unethically in order to 'let the ends
        justify the means'.[35][36] This leads to personal conflicts with the
        people around him, both in his civilian and superhero identities. Stark
        uses his vast personal fortune not only to outfit his own armor, but
        also to develop weapons for S.H.I.E.L.D.; other technologies (e.g.,
        Quinjets used by the Avengers); and the image inducers used by the
        X-Men. Eventually, Stark's heart condition is publicly discovered when
        he was summoned for a Congressional hearing and Stark collapsed when his
        chestpiece's power failed, causing a heart attack. Stark was medically
        examined, which revealed his hidden equipment, and was hospitalized,
        forcing Pepper to have Happy don his employer's armor to pose as Iron
        Man to protect his boss's secret identity.[37] Eventually, that specific
        medical issue was resolved with an artificial heart transplant, which
        still required the chestplate for some time to support the replacement
        organ.[38] 1970s and early 1980s Stark expands on his armor designs and
        begins to build his arsenal of specialized armors for particular
        situations such as for space travel[39] and stealth.[40][41] Stark also
        develops a serious dependency on alcohol in the "Demon in a Bottle"
        storyline.[42] The first time it becomes a problem is when Stark
        discovers that the national security agency S.H.I.E.L.D. has been buying
        a controlling interest in his company in order to ensure Stark's
        continued weapons development for them. At the same time, it is revealed
        that several minor supervillains armed with advanced weapons who had
        bedeviled Stark throughout his superhero career are in fact in the
        employ of Stark's business rival, Justin Hammer, who begins to plague
        Stark more directly.[43][44] At one point in Hammer's manipulations, the
        Iron Man armor is taken over and used to murder a diplomat.[44] Although
        Iron Man is not immediately under suspicion, Stark is forced to hand the
        armor over to the authorities.[45] Eventually Stark and Rhodes, who is
        now his personal pilot and confidant, track down and defeat those
        responsible, although Hammer would return to bedevil Stark
        again.[39][46] With the support of his then-girlfriend, Bethany Cabe,
        his friends and his employees, Stark pulls through these crises and
        overcomes his dependency on alcohol.[47] Even as he recovers from this
        harrowing personal trial, Stark's life is further complicated when he
        has a confrontation with Doctor Doom that is interrupted by an
        opportunistic enemy sending them back in time to the time of King
        Arthur.[48] Once there, Iron Man thwarts Doom's attempt to solicit the
        aid of Morgan Le Fay, and the Latverian ruler swears deadly vengeance—to
        be indulged sometime after the two return to their own time.[49] This
        incident was collected and published as Doomquest. Some time later, a
        ruthless rival, Obadiah Stane, manipulates Stark emotionally into a
        serious relapse. As a result, Stark loses control of Stark International
        to Stane, becomes a homeless alcoholic vagrant and gives up his armored
        identity to Rhodes, who becomes the new Iron Man. Eventually, Stark
        recovers and joins a new startup, Circuits Maximus. Stark concentrates
        on new technological designs, including building a new set of armor as
        part of his recuperative therapy. Rhodes continues to act as Iron Man
        but steadily grows more aggressive and paranoid, due to the armor not
        having been calibrated properly for his use. Eventually Rhodes goes on a
        rampage, and Stark has to don a replica of his original armor to stop
        him. Fully recovered, Stark confronts Stane who has himself designed
        armor based on designs seized along with Stark International, dubbing
        himself the 'Iron Monger'. Defeated in battle, Stane, rather than give
        Stark the satisfaction of taking him to trial, commits suicide.[50]
        Shortly thereafter, Stark regains his personal fortune, but decides
        against repurchasing Stark International until much later; he instead
        creates Stark Enterprises, headquartered in Los Angeles. Late 1980s and
        1990s In an attempt to stop other people from misusing his designs,
        Stark goes about disabling other armored heroes and villains who are
        using suits based on the Iron Man technology, the designs of which were
        stolen by his enemy Spymaster. His quest to destroy the stolen
        technology—originally called "Stark Wars" but is more commonly known as
        the "Armor Wars"—severely hurts his reputation as Iron Man. After
        attacking and disabling a series of minor villains such as Stilt-Man, he
        attacks and defeats the government operative known as Stingray. The
        situation worsens when Stark realizes that Stingray's armor does not
        incorporate any of his designs. He publicly "fires" Iron Man while
        covertly pursuing his agenda. He uses the cover story of wanting to help
        disable the rogue Iron Man to infiltrate and disable the armor of the
        S.H.I.E.L.D. operatives known as the Mandroids, as well as the armor of
        the Guardsmen. In the process, Iron Man and Jim Rhodes allow some of the
        villains in the Vault to escape. This leads the United States government
        to declare Iron Man a danger and an outlaw, and severely sours Stark's
        relationship with Steve Rogers (Captain America, who was in his
        "Captain" persona at the time). Iron Man travels to Russia where he
        inadvertently causes the death of the Soviet Titanium Man during a
        fight. Returning to the U.S., he faces an enemy commissioned by the
        government named Firepower. Unable to defeat him head on, Stark fakes
        Iron Man's demise,[51] intending to retire the suit permanently. When
        Firepower goes rogue, Stark creates a new suit, claiming a new person is
        in the armor. Soon after, Stark is nearly killed by Kathy Dare, a
        mentally unbalanced former lover. She shoots him dead center in his
        torso which injures his spine, paralyzing him.[52] Stark undergoes
        special surgery to have a nerve chip implanted into his spine to regain
        his mobility.[53] Unbeknownst to the industrialist, the nerve chip is a
        clandestine means by which to gain control over his body. Rival
        businessmen the Marrs Twins and their cohort Kearson DeWitt are behind
        the machinations in what came to be known as "Armor Wars II."[54] After
        several successful tests by DeWitt at manipulating Stark, Tony finds
        that using his Encephalo Armor can counteract DeWitt's controls.[55] In
        response, DeWitt suddenly releases his control resulting in excruciating
        agony throughout Stark's body.[56] The constant "battle" for control of
        Stark's nervous system and subsequent abdication on DeWitt's end lead to
        massive nerve damage throughout Tony's body. Stark's nervous system
        continues its slide towards failure, and he constructs a "skin" made up
        of artificial nerve circuitry to assist it.[57] Stark begins to pilot a
        remote-controlled Iron Man armor, but when faced with the Masters of
        Silence, the telepresence suit proves inadequate.[58] Stark designs a
        more heavily armed version of the suit to wear, the "Variable Threat
        Response Battle Suit", which becomes known as the War Machine armor.
        Ultimately, the damage to his nervous system becomes too extensive.
        Faking his death, Stark places himself in suspended animation to heal as
        Rhodes takes over both the running of Stark Enterprises and the mantle
        of Iron Man, although he uses the War Machine armor.[59] Stark
        eventually makes a full recovery by using a chip to create an entirely
        new (artificial) nervous system, and resumes as Iron Man in a new
        Telepresence Armor.[60] When Rhodes learns that Stark has manipulated
        his friends by faking his own death, he becomes enraged and the two
        friends part ways. Rhodes continues on as War Machine in a solo career.
        The Avengers story arc "The Crossing" reveals Iron Man as a traitor
        among the team's ranks, due to years of manipulation by the
        time-traveling dictator Kang the Conqueror. Stark, as a sleeper agent in
        Kang's thrall, kills Marilla, the nanny of Crystal and Quicksilver's
        daughter Luna, as well as Rita DeMara, the female Yellowjacket, then
        Amanda Chaney, an ally of the Avengers. The "Avengers Forever" limited
        series retcons these events as the work of a disguised Immortus, not
        Kang, and that the mental control had gone back only a few months.[61]
        Needing help to defeat both Stark and Kang, the team travels back in
        time to recruit a teenaged Anthony Stark from an alternate timeline to
        assist them. The young Stark steals an Iron Man suit in order to aid the
        Avengers against his older self. The sight of his younger self shocks
        the older Stark enough for him to regain momentary control of his
        actions, and he sacrifices his life to stop Kang.[62] The young Stark
        later builds his own suit to become the new Iron Man and remains in the
        present day. During the battle with the creature called Onslaught, the
        teenage Stark dies, along with many other superheroes. Franklin Richards
        preserves these "dead" heroes in the "Heroes Reborn" pocket universe, in
        which Stark is once again an adult hero; Franklin recreates the heroes
        in the pocket universe in the forms he is most familiar with rather than
        what they are at the present. The reborn adult Stark, upon returning to
        the normal Marvel Universe, merges with the original Stark, who had died
        during "The Crossing", but was resurrected by Franklin Richards. This
        new Anthony Stark possesses the memories of both the original and
        teenage Anthony Stark, and thus considers himself to be essentially both
        of them. With the aid of the law firm Nelson & Murdock, he regains his
        fortune and, with Stark Enterprises having been sold to the Fujikawa
        Corporation following Stark's death, sets up a new company, Stark
        Solutions. He returns from the pocket universe with a restored and
        healthy heart. After the Avengers reform, Stark demands a hearing be
        convened to look into his actions just prior to the Onslaught incident.
        Cleared of wrongdoing, he rejoins the Avengers.[63] 2000s At one point,
        Stark's armor becomes sentient despite fail-safes to prevent its
        increasingly sophisticated computer systems from doing so.[64]
        Initially, Stark welcomes this "living" armor for its improved tactical
        abilities. The armor begins to grow more aggressive, killing
        indiscriminately and eventually desiring to replace Stark altogether. In
        the final confrontation on a desert island, Stark suffers another heart
        attack. The armor sacrifices its own existence to save its creator's
        life, giving up essential components to give Stark a new, artificial
        heart. This new heart solves Stark's health problems, but it does not
        have an internal power supply, so Stark becomes once again dependent on
        periodic recharging. The sentient armor incident so disturbs Stark that
        he temporarily returns to using an unsophisticated early model version
        of his armor to avoid a repeat incident.[65] He dabbles with using
        liquid metal circuitry known as S.K.I.N. that forms into a protective
        shell around his body, but eventually returns to more conventional hard
        metal armors.[66] During this time, Stark engages in a romance with
        Rumiko Fujikawa,[67] a wealthy heiress and daughter of the man who had
        taken over his company during the "Heroes Reborn" period. Her
        relationship with Stark endures many highs and lows, including
        infidelity with Stark's rival, Tiberius Stone, in part because the
        fun-loving Rumiko believes that Stark is too serious and dull. Their
        relationship ends with Rumiko's death at the hands of an Iron Man
        impostor in Iron Man vol. 3 #87. In Iron Man vol. 3 #55 (July 2002),
        Stark publicly reveals his dual identity as Iron Man, not realizing that
        by doing so, he has invalidated the agreements protecting his armor from
        government duplication, since those contracts state that the Iron Man
        armor would be used by an employee of Tony Stark, not by Stark himself.
        When he discovers that the United States military is again using his
        technology, and its defective nature nearly causes a disaster in
        Washington, D.C. which Iron Man barely manages to avert, Stark accepts a
        Presidential appointment as Secretary of Defense. In this way, he hopes
        to monitor and direct how his designs are used.[68] In the "Avengers
        Disassembled" storyline, Stark is forced to resign after launching into
        a tirade against the Latverian ambassador at the United Nations, being
        manipulated by the mentally imbalanced Scarlet Witch, who destroys
        Avengers Mansion and kills several members. Stark publicly stands down
        as Iron Man, but continues using the costume. He joins the Avengers in
        stopping the breakout in progress from the Raft and even saves Captain
        America from falling.[69] Tony changes the Avengers base to Stark
        Tower.[70] The Ghost, the Living Laser and Spymaster reappear and shift
        Iron Man from standard superhero stories to dealing with politics and
        industrialism.[71] New Avengers: Illuminati #1 (June 2006) reveals that
        years before, Stark had participated with a secret group that included
        the Black Panther, Professor X, Mister Fantastic, Black Bolt, Doctor
        Strange, and Namor. The goal of the group (dubbed the Illuminati by
        Marvel) was to strategize overarching menaces, in which the Black
        Panther rejects a membership offer. Stark's goal is to create a
        governing body for all superheroes in the world, but the beliefs of its
        members instead force them all to share vital information. "Civil War"
        In the "Civil War" storyline, after the actions of inexperienced
        superheroes the New Warriors result in the destruction of several city
        blocks in Stamford, Connecticut, there is an outcry across America
        against superhumans. Learning of the Government's proposed plans, Tony
        Stark suggests a new plan to instigate a Superhuman Registration Act.
        The Act would force every superpowered individual in the U.S. to
        register their identity with the government and act as licensed agents.
        The Act would force inexperienced superhumans to receive training in how
        to use and control their abilities, something in which Tony strongly
        believes. Since his struggle with alcoholism, Stark has carried a
        tremendous burden of guilt after nearly killing an innocent bystander
        while piloting the armor drunk. While Reed Richards and Dr. Henry "Hank"
        Pym both agree with Stark's proposal, not everyone does. After Captain
        America is ordered to bring in anyone who refuses to register, he and
        other anti-registration superheroes go rogue, coming into conflict with
        the pro-registration heroes, led by Iron Man. The war ends when Captain
        America surrenders to prevent further collateral damage and civilian
        casualties, although he had defeated Stark by defusing his armor. Stark
        is appointed the new director of S.H.I.E.L.D.,[72] and organizes a new
        government-sanctioned group of Avengers. Shortly afterwards, Captain
        America is assassinated while in custody.[73] This leaves Stark with a
        great amount of guilt and misgivings about the cost of his victory.[74]
        "Secret Invasion" To tie into the 2008 Iron Man feature film, Marvel
        launched a new Iron Man ongoing series, The Invincible Iron Man, with
        writer Matt Fraction and artist Salvador Larroca. The series inaugural
        six-part storyline was "The Five Nightmares", which saw Stark targeted
        by Ezekiel Stane, the son of Stark's former nemesis, Obadiah Stane.[75]
        In the "Secret Invasion" storyline, after Tony Stark survives an attempt
        by Ultron to take over his body, he is confronted in the hospital by
        Spider-Woman, holding the corpse of a Skrull posing as Elektra.
        Realizing this is the start of an invasion by the Skrulls, Tony reveals
        the corpse to the Illuminati and declares that they are at war. After
        Black Bolt reveals himself as a Skrull and is killed by Namor, a
        squadron of Skrulls attack, forcing Tony to evacuate the other
        Illuminati members and destroy the area, killing all the Skrulls.
        Realizing that they are incapable of trusting each other, the members
        all separate to form individual plans for the oncoming invasion.[76]
        Stark is discredited and publicly vilified after his inability to
        anticipate or prevent the secret infiltration and invasion of Earth by
        the Skrulls, and by the Skrull disabling of his StarkTech technology,
        which had a virtual monopoly on worldwide defense.[77] After the
        invasion, the U.S. government removes him as head of S.H.I.E.L.D. and
        disbands the Avengers, handing control of the Initiative over to Norman
        Osborn. "Dark Reign" Main article: Dark Reign (comics) See also: The
        Invincible Iron Man With his Extremis powers failing, Stark uploads a
        virus to destroy all records of the Registration Act, thus preventing
        Osborn from learning the identities of his fellow heroes and anything
        that Osborn could use, including his repulsor generators. The only copy
        of the database is in Stark's brain, which he tries to delete while on
        the run from Osborn.[78] Stark goes so far as to inflict brain damage on
        himself in order to ensure that the relevant information is wiped. When
        Osborn catches up to the debilitated Stark and beats him savagely,
        Pepper Potts broadcasts the beatings worldwide, costing Osborn
        credibility and giving Stark public sympathy. Stark goes into a
        vegetative state, having previously granted Donald Blake (alter ego of
        the superhero Thor) power of attorney.[79] A holographic message stored
        in Pepper's armor reveals that Stark had developed a means of
        'rebooting' his mind from his current state prior to his destruction of
        the database, with Blake and Bucky resolving to use it to restore him to
        normal. Meanwhile, Stark is trapped in his subconscious, where figments
        of his own mind prevent him from returning to the waking world. When the
        procedure fails to work, Bucky calls in Doctor Strange, who succeeds in
        restoring Stark back to consciousness. The backup Stark created was made
        prior to the Civil War, and as such he does not remember anything that
        took place during the event, although he still concludes after reviewing
        his past actions that he would not have done anything differently. His
        brain damage means he is now dependent on an arc reactor to sustain his
        body's autonomous functions.[80] 2010s "Siege" Main article: Siege
        (comics) In the "Siege" storyline, Tony Stark is seen under the care of
        Dr. Donald Blake and Maria Hill when Asgard is attacked.[81] Thor is
        ambushed by Osborn and the Sentry, but rescued by Hill. Osborn declares
        martial law and unleashes Daken and the Sentry on Broxton to root out
        Thor and Hill. Hill returns to Stark's hiding place to move him to a
        safer location and are joined by Speed of the Young Avengers, who has a
        set of Iron Man's MK III armor that Edwin Jarvis had given Captain
        America. While Osborn is battling the New Avengers, Stark appears and
        disables Osborn's Iron Patriot armor. Osborn orders the Sentry to
        annihilate Asgard, rather than allow the Avengers to have it. After
        Asgard falls, Stark stands alongside his fellow heroes, as Osborn
        exclaims they are all doomed and he 'was saving them from him' pointing
        up towards a Void-possessed Sentry.[82] As the Void tears apart the
        teams, Loki gives them the power to fight back through the Norn Stones.
        The Void kills Loki, enraging Thor. Tony tells Thor to get the Void away
        from Asgard, which allows Tony to drop a commandeered H.A.M.M.E.R.
        Helicarrier on the Void. Thor is forced to killed Sentry when the Void
        resurfaces. Sometime later, the Super-Human Registration Act is repealed
        and Tony is given back his company and armor. As a symbol for their
        heroics and their new unity, Thor places an Asgardian tower on Stark
        Tower where the Watchtower once stood.[83] "Heroic Age" Main article:
        Heroic Age (comics) In the 2010–2011 "Stark: Resilient" storyline, Tony
        builds the Bleeding Edge armor with the help of Mister Fantastic. This
        new armor fully uses the repulsor tech battery embedded in his chest to
        power Tony's entire body and mind, thus allowing him access to Extremis
        once more. Furthermore, the battery operates as his "heart" and is the
        only thing keeping him alive.[84] Tony announces he will form a new
        company, Stark Resilient. He states that he will no longer develop
        weapons, but will use his repulsor technology to give free energy to the
        world. Justine and Sasha Hammer create their own armored hero, Detroit
        Steel, to take Stark's place as the Army's leading weapons-builder.
        Stark's plan consists of building two repulsor-powered cars. The Hammers
        try to foil his efforts. The first car is destroyed by sabotage, while
        Detroit Steel attacks Stark Resilient's facilities while Tony tests the
        second car. Through a legal maneuver, Tony is able to get the Hammers to
        stop their attacks and releases a successful commercial about his new
        car.[85][86] "Fear Itself" In the 2011 "Fear Itself" storyline, Earth is
        attacked by the Serpent, the God of Fear and the long-forgotten brother
        of Odin.[87] In Paris, Iron Man fights Grey Gargoyle, who has become
        Mokk, Breaker of Faith, one of the Serpent's Worthy. Mokk leaves Iron
        Man unconscious and transforms Detroit Steel and the citizens of Paris
        into stone.[88][89] To defeat the Serpent's army, Tony drinks a bottle
        of wine (thus 'sacrificing' his sobriety) to gain an audience with Odin,
        who allows Tony to enter the realm of Svartalfheim. Tony and the dwarves
        of Svartalfheim build enchanted weapons.[90] Tony upgrades his armor
        with uru-infused enchantments and delivers the finished weapons to the
        Avengers, who use them for the final battle against the Serpent's
        forces. Iron Man watches as Thor kills the Serpent, but dies in the
        process. After the battle is over, Tony melts down the weapons he
        created and repairs Captain America's shield, which had been broken by
        Serpent, and gives it back to Captain America.[91] During a subsequent
        argument with Odin about the gods' lack of involvement in the recent
        crisis, Odin gives Tony a brief opportunity to see the vastness of the
        universe the way he sees it. As thanks for Tony's role in the recent
        crisis, Odin restores all the people that the Grey Gargoyle killed
        during his rampage.[92] Return of the Mandarin and Marvel NOW! In the
        storylines "Demon" and "The Long Way Down", Stark is subpoenaed by the
        U.S. government after evidence surfaces of him using the Iron Man armor
        while under the influence. Mandarin and Zeke Stane upgrade some of Iron
        Man's old enemies and send them to commit acts of terrorism across the
        world, intending to discredit Iron Man. General Bruce Babbage forces
        Stark to wear a tech governor, a device that allows Babbage to
        deactivate Stark's armor whenever he wants. To fight back, Tony
        undergoes a surgical procedure that expels the Bleeding Edge technology
        out of his body and replaces his repulsor node with a new model, forcing
        Babbage to remove the tech governor off his chest. He announces his
        retirement as Iron Man, faking Rhodes's death and giving him a new armor
        so that he becomes the new Iron Man.[93] This leads into the next
        storyline, "The Future", in which the Mandarin takes control of Stark's
        mind and uses him to create new armored bodies for the alien spirits
        inhabiting his rings, but Stark allies himself with some of his old
        enemies, who have also been imprisoned by Mandarin, and manages to
        defeat him. The final issue of this storyline concluded Matt Fraction's
        series.[94] In the ongoing series that premiered in 2012 as part of the
        Marvel NOW! relaunch, Tony Stark has hit a technological ceiling. After
        the death of Dr. Maya Hansen and the destruction of all of the Extremis
        Version 2 kits that were being sold to the black market, Tony decides
        that the Earth is not safe without him learning more from what's in the
        final frontier. He takes his new suit, enhanced with an artificial
        intelligence named P.E.P.P.E.R. and joins Peter Quill and The Guardians
        of the Galaxy after helping them thwart a Badoon attack on Earth.[95]
        Superior Iron Man Tony Stark's personality is inverted during the events
        of AXIS, bringing out more dark aspects of himself like
        irresponsibility, egotism and alcoholism.[96] Stark relocates to San
        Francisco and builds a new, all-white armor. He supplies the citizens of
        San Francisco with the Extremis 3.0 app, a version of the techno-virus
        that offers beauty, health or even immortality, free.[97] When every
        person in the city viewed Iron Man as a messiah for making their dreams
        come true, he ended the free trial mode and started charging a daily fee
        of $99.99, causing many to resort to crime to pay for the upgrade.[98]
        Daredevil confronts Stark at his new Alcatraz Island penthouse, but is
        easily brushed off.[99] Iron Man uses Extremis 3.0 to temporarily
        restore Daredevil's sight, just to prove his point.[100] Daredevil
        deduces that Stark had added Extremis to the water supply and the phones
        only transmit an activation signal, but Stark subjects Murdock to minor
        brain damage to prevent him from sharing this revelation with
        others.[101] After discovering that new villain Teen Abomination is the
        son of Happy Hogan, Stark decides to help him,[102] but this minor act
        of redemption is too late for Pepper Potts, who attacks Stark with the
        aid of an A.I. based on Stark's mind.[103] This culminates in a
        confrontation between the two Starks, as Stark calls on the unwitting
        aid of all 'infected' with the Extremis upgrade while the A.I. uses
        Stark's various old armors to attack him.[104] Although Stark
        technically wins the battle as he destroys his other armors and deletes
        the A.I. backup, Pepper states that she plans to reveal the truth about
        his goals with Extremis, bluntly informing him that if he continues his
        Extremis upgrade project, he will have to do it alone, accepting his
        fate of being regarded as a monster by all who know him.[105] Time Runs
        Out During the "Time Runs Out" storyline, an attempt at reclaiming
        Wakanda from the Cabal that Namor had created to destroy incursive
        Earths results in Tony being held captive in the Necropolis.[106] After
        the Cabal are apparently killed, the Illuminati free Tony, who is forced
        to flee due to the Illuminati's unwillingness to let Stark be there with
        them when they meet Rogers and the Avengers. When the Shi'ar and their
        allies arrive to destroy Earth, the Avengers and the Illuminati
        unsuccessfully try to retaliate. Iron Man uses Sol's Hammer to destroy
        the fleet.[107] The incursions continue, and Rogers confronts Stark
        about what he knows. A fight ensues between them and Stark admits that
        he had lied and had known about the incursions all along. During the
        final incursion, Earth-1610's S.H.I.E.L.D. launches a full-scale attack
        on Earth-616, during which Stark and Rogers are crushed by a
        Helicarrier.[108] All-New, All-Different Marvel After the events of the
        Secret Wars crossover, Stark returns to his normal self with no signs of
        his inverted personality. Eight months following the return of the
        universe as seen in the "All-New, All-Different Marvel" event, Tony
        works in his laboratory non-stop after his position as an innovator had
        been put in doubt. Because an M.I.T. student reverse-engineered some of
        his technology, Stark develops a new armor which can change shape
        according to the situation he would find himself. When Stark's new A.I.
        F.R.I.D.A.Y. informs him that Madame Masque has broken into the ruins of
        Castle Doom, he travels to Latveria to investigate and runs into some
        revolutionaries who are then defeated by a man in a suit. To his
        amazement, Iron Man's armor computer identifies him as Doctor Doom with
        his face restored. Doctor Doom claims that he wanted to help Iron
        Man.[109] After learning from Doctor Doom that Madame Masque has taken a
        decoy of the Wand of Watoomb, Tony Stark confronts Madame Masque. Upon
        learning that Madame Masque is not allied with Doctor Doom, Tony is
        attacked by her with a burst of energy that damages his armor.[110]
        F.R.I.D.A.Y. manages to gain control of the suit and takes Tony to a
        safe location. Iron Man tracks Madame Masque to Marina del Rey. After
        finding a tape recorder with her messages, Tony is attacked by several
        black silhouettes with swords.[111] Iron Man escapes the ninjas that are
        attacking him and manages to defeat most of them, but they kill
        themselves before he can interrogate any of them. Iron Man and Doctor
        Doom arrive at Mary Jane Watson's newest Chicago night club Jackpot when
        Madame Masque attacks it.[112] As Mary Jane distracts Madame Masque by
        knocking off her mask, Iron Man and Doctor Doom discover that Madame
        Masque is possessed by a demon. Doctor Doom is able to perform an
        exorcism on her.[113] Doctor Strange arrives and tells Iron Man he will
        take Madame Masque with him to fix her metaphysically and then hand her
        over at S.H.I.E.L.D. Iron Man also informs him of Doctor Doom's help who
        had left the scene some time ago. Three days later, Iron Man offers Mary
        Jane a job to make up for the damage to her nightclub.[114] After
        speaking with War Machine, Tony Stark meets up at a diner with Amara
        Perera when they are unexpectedly joined by Doctor Doom who wanted to
        make sure that the demonic possession that affected Madame Masque has
        not affected Stark or Amara.[115] Stark shows Mary Jane the
        demonstration on the people that he will be working with. They are
        interrupted by F.R.I.D.A.Y. who tells Tony that War Machine is
        missing.[116] Before heading to Tokyo, Tony receives from Mary Jane the
        emergency number for Peter Parker. In Tokyo, Iron Man is contacted by
        Spider-Man at War Machine's last known location as he is being observed
        by ninjas.[117] During the Civil War II storyline, Iron Man protests the
        logic of using precognitive powers to stop future crimes after the
        recently emerged Inhuman Ulysses predicted Thanos's attack on Project
        Pegasus. Three weeks later, Iron Man is summoned to the Triskelion after
        War Machine is killed in battle against Thanos. When Iron Man learns
        that War Machine and the Ultimates used Ulysses's power to ambush
        Thanos, he vows to stop anyone from using that power again.[118] Iron
        Man infiltrates New Attilan and makes off with Ulysses. At Stark Tower,
        Iron Man vows to find out how Ulysses's precognition works. The Inhumans
        attack Stark Tower but are stopped by the Avengers, the Ultimates, and
        S.H.I.E.L.D. During the confrontation, Ulysses has another vision which
        he projects to Iron Man and everyone present, showing a rampaging Hulk
        standing over the corpses of the defeated superheroes.[119] The heroes
        confront Banner, who is killed by Hawkeye. Barton claims that Banner was
        about to transform and Banner had previously asked Hawkeye to kill him
        if he should turn back into the Hulk. Tony is disgusted at this use of
        Ulysses's power. When his analysis of Ulysses brain is completed,[120]
        Tony reveals that Ulysses does not actually see the future, but simply
        assembles large quantities of data to project likely outcomes. While
        Danvers continues to use the visions as a resource, Tony objects to the
        concept of profiling people. This results in a stand-off when Tony's
        side abducts a woman from custody after Ulysses's visions identified her
        as a deep-cover HYDRA agent, despite the lack of supporting
        evidence.[121] Iron Man learns that his biological mother was actually
        Amanda Armstrong, who had given him up for adoption and that his
        biological father was a Hydra double agent named Jude. S.H.I.E.L.D. had
        Armstrong's baby adopted by Howard and Maria Stark.[122] Marvel NOW!
        2016 In July 2016, it was announced that Tony Stark would hand off the
        mantle of Iron Man to a 15-year-old girl named Riri Williams. Riri is an
        MIT student who built her own Iron Man suit out of scrap pieces and, as
        such, attracted Stark's attention. Early depictions of Williams' suit
        depict it without the Arc Reactor, but leaves the power source for the
        suit unclear.[123] Another Iron Man-based series titled Infamous Iron
        Man debuted featuring Doctor Doom sporting his version of the Iron Man
        armor.[124] This is revealed to be the result of serious injuries
        sustained by Stark during his final confrontation with Captain Marvel.
        Danvers' beating leaves Stark in a coma, but he is left alive due to
        unspecified experiments Stark has carried out on himself over the
        years.[125] Existing as an A.I. Following the revelation that Stark
        experimented on himself at the end of Civil War II, Beast concludes that
        the only option is to let the experiments do their job in healing Tony
        and recover on his own.[126] In Invincible Iron Man #1, an employee of
        Stark sends Riri Williams an artificial intelligence housing a copy of
        Tony Stark's consciousness to help her control and mentor in her own
        version of the Iron Man armor. This A.I. is directly copied from Tony's
        brain, granting sentience, with Williams commenting on Stark existing as
        a "techno-ghost". As an A.I., Stark can walk around as a hard-light
        object and gains the ability to remote control his vast armory of Iron
        Man suits.[127] In The Mighty Captain Marvel #3, the Tony Stark A.I.
        goes to Antarctica and visits Captain Marvel with the intent on settling
        their differences from the Second Civil War, she apologizes to him for
        her regrets, reconciles with him eventually and they become allies once
        more. Then in Secret Empire, the Tony Stark A.I. suits up as Iron Man
        once again and learns of Captain America's betrayal to Hydra and how he
        ended up like this. As Hydra tightens its grip across America, the Tony
        Stark A.I. leads a team known as the Underground to find the Cosmic
        Cubes to restore Rogers to his normal self. When things start to
        escalate, Tony and his crew go rogue and in search for answers for the
        Cube. As Iron Man and the Underground search for them they are
        intercepted by Captain America and his Hydra team. With both teams
        encountering each other, they are captured by the Ultron/Hank Pym
        hybrid, who forces both teams to sit at a dinner table. During "dinner",
        Ultron reveals information about the Hydra Avengers – such as Odinson
        working with Hydra to reclaim Mjolnir, Scarlet Witch being possessed by
        Chthon, and Vision being affected by an A.I. virus. Ultron argues that
        he is doing this because the Avengers have become less of a family over
        the years as so many of them jump to obey Captain America or Iron Man,
        despite past experience confirming that this is not always a good idea,
        but Tony counters that the only reason the team failed as a family was
        because of Hank's abuse towards Wasp. Enraged, Ultron is about to kill
        everyone, but Ant-Man is able to calm him down by arguing that Hank
        remains his own inspiration. Ultron allows the Underground to leave with
        the fragment, arguing that neither side should have an advantage over
        the other. Back in America, Hydra Supreme has put Namor in a position
        where he will be forced to sign a peace treaty that gives Rogers access
        to the Cosmic Cube fragment in Atlantis, but Hydra Supreme muses that he
        is unconcerned about who will acquire the fragments, as he has an inside
        man in the Underground. After the Mount was attacked by Thor and the
        resurrected Hulk led by Hydra, the Underground evacuated the civilians
        thanks to Hawkeye and the rest of the heroes. Captain America and Iron
        Man fight as the Mount collapses around them. The Tony Stark A.I.
        initiates the Mount's "Clean Slate Protocol", and blows up the Mount,
        killing Madame Hydra, then apologizes to Steve Rogers about their past
        differences, but the A.I survives and, in the aftermath, helps the
        heroes pull the pieces back together to take down Hydra. When Iron Man
        confronts Hydra Supreme, he and the other heroes are easily overpowered
        by him and watch the original Captain America defeat his Hydra self and
        into celebrating their victory.[128] Marvel Legacy Mary Jane Watson and
        other Stark employees find that Stark's body has completely vanished
        from its pod, despite tests taken mere hours ago showing no sign of
        improvement or brain activity.[volume & issue needed][129] It was
        discovered that Tony Stark's comatose body was taken to the Stark
        Industries Complex in Dover.[130] Upon awakening when his biological
        systems rebooted, Tony Stark went into hiding until he fully
        recovered.[131] Wanting to make sure that James Rhodes was in a similar
        state that he was in, Tony Stark exhumed his body from Arlington
        Cemetery and kick-started the biological systems in him. Afterwards,
        Iron Man and War Machine fought Hood to keep Stark Industries from
        falling into Hood's hands where he switched to a version of his Extremis
        armor. Then he proceeded to defeat Jude when he turned up alive.[132]
        During "The Ultron Agenda" arc, Iron Man went up against the Ultron/Hank
        Pym who begun a plan to merge humans with robots while taking up the
        name "Ultron Pym." Iron Man was briefly fused with his armor. After
        using Stark Unlimited's atomic separator on himself, Iron Man figured
        out that Hank Pym was dead the moment he accidentally fused with Ultron.
        Not wanting to prove Tony right, Ultron Pym surrendered to Iron Man and
        the Avengers. As it turned out that Iron Man actually died during the
        Civil War II storyline, Arno Stark used this to his advantage to acquire
        Stark Unlimited through a merger with Baintronics. With the combined
        resources, he built the Iron Man Armor Model 66 as his attempt to
        recreate the Godbuster Armor. Now having a new destiny, Arno Stark
        became the latest person to take on the Iron Man mantle.[133] Because of
        his revelation that he is now a simulated A.I. at the start of the "Iron
        Man 2020" storyline, Tony Stark became Mark One and started to establish
        the A.I. Army which also consists of Albert, Awesome Android, Egghead
        II, H.E.R.B.I.E., M-11, Machine Man, Machinesmith, Quasimodo,
        Super-Adaptoid, Walking Stiletto, the Dreadnoughts, a Sentinel, several
        Constructo-Bots, several Nick Fury LMDs, and an unnamed bomb disposal
        robot. This group of robots and androids want to obtain equal rights
        with organic beings through whatever way possible. Mark One provided
        them with a hideout on Floor Thirteen, a solid light construct that can
        only be accessed by robots and androids. With the establishment of Floor
        Thirteen, Mark One keeps the A.I. Army safe from their enemies and
        oppressors.[134] Powers, abilities, and equipment Armor Main article:
        Iron Man's armor The Bleeding Edge Armor, like the Extremis Armor before
        it, is stored in Stark's bones, and can be assembled and controlled by
        his thoughts Iron Man possesses powered armor that gives him superhuman
        strength and durability, flight, and an array of weapons. The armor is
        invented and worn by Stark (with occasional short-term exceptions).
        Other people who have assumed the Iron Man identity include Stark's
        long-time partner and best friend James Rhodes;[135] close associates
        Harold "Happy" Hogan; Eddie March;[136][137] (briefly) Michael O'Brien
        and Riri Williams. The weapons systems of the suit have changed over the
        years, but Iron Man's standard offensive weapons have always been the
        repulsor rays that are fired from the palms of his gauntlets. Other
        weapons built into various incarnations of the armor include: the
        uni-beam projector in its chest; pulse bolts (that pick up kinetic
        energy along the way; so the farther they travel, the harder they hit);
        an electromagnetic pulse generator; and a defensive energy shield that
        can be extended up to 360 degrees. Other capabilities include:
        generating ultra-freon (i.e., a freeze-beam); creating and manipulating
        magnetic fields; emitting sonic blasts; and projecting 3-dimensional
        holograms (to create decoys). In addition to the general-purpose model
        he wears, Stark has developed several specialized suits for space
        travel,[39] deep-sea diving, stealth,[40][41] and other special
        purposes. Stark has modified suits, like the Hulkbuster heavy armor. The
        Hulkbuster armor is composed of add-ons to his so-called modular armor,
        designed to enhance its strength and durability enough to engage the
        Hulk in a fight. A later model, created with the help of Odin and the
        Asgardian metal Uru, is similar to the Destroyer. Stark develops an
        electronics pack during the Armor Wars that, when attached to armors
        that use Stark technologies, will burn out those components, rendering
        the suit useless. This pack is ineffective on later models. While it is
        typically associated with James Rhodes, the War Machine armor began as
        one of Stark's specialty armors. The most recent models of Stark's
        armor, beginning with the Extremis armor, are now stored in the hollow
        portions of Stark's bones, and the personal area networking implement
        used to control it is implanted into his forearm, and connected directly
        to his central nervous system. The Extremis has since been
        removed,[volume & issue needed] and he now uses more conventional
        armors. Some armors still take a liquid form, but are not stored within
        his body. His Endo-Sym Armor incorporates a combination of the liquid
        smart-metal with the alien Venom symbiote, psionically controlled by
        Stark. Post-Secret Wars, Stark uses a more streamlined suit of armor
        that uses nanotechnology to shape shift into other armors or
        weapons.[138] Powers After being critically injured during a battle with
        the Extremis-enhanced Mallen, Stark injects his nervous system with
        modified techno-organic virus-like body restructuring machines (the
        Extremis process).[139] By rewriting his own biology, Stark is able to
        save his life, gain an enhanced healing factor, and partially merge with
        the Iron Man armor, superseding the need for bulky, AI-controlled armors
        in favor of lighter designs, technopathically controlled by his own
        brain. His enhanced technopathy extends to every piece of technology,
        limitless and effortlessly due to his ability to interface with
        communication satellites and wireless connections to increase his
        "range". Some components of the armor-sheath are now stored in Tony's
        body, able to be recalled, and extruded from his own skin, at will.
        During the "Secret Invasion" storyline the Extremis package is
        catastrophically shut down by a virus, forcing him again to rely on the
        previous iteration of his armor, and restoring his previous limitations.
        Furthermore, Osborn's takeover of most of the few remaining Starktech
        factories, with Ezekiel Stane systematically crippling the others,
        limits Tony to the use of lesser, older and weaker armors.[140] After
        being forced to "wipe out" his brain to prevent Norman Osborn from
        gaining his information, Tony Stark is forced to have a new arc reactor,
        of Rand design installed in his chest. The process greatly improves his
        strength, stamina and intellect. The procedure left him with virtually
        no autonomic functions: as his brain was stripped of every biological
        function, Tony is forced to rely on a digital backup of his memories
        (leaving him with severe gaps and lapses in his long-term memory) and on
        software routine in the arc reactor for basic stimuli reaction, such as
        blinking and breathing.[141][142] The Bleeding Edge package of armor and
        physical enhancement is now equal in power, if not a more advanced,
        version of the old Extremis tech.[84] Skills Tony Stark is an inventive
        genius whose expertise in the fields of mathematics, physics, chemistry,
        and computer science rivals that of Reed Richards, Hank Pym, and Bruce
        Banner, and his expertise in electrical engineering and mechanical
        engineering surpasses even theirs. He is regarded as one of the most
        intelligent characters in the Marvel Universe. He graduated with
        advanced degrees in physics and engineering at the age of 17 from
        Massachusetts Institute of Technology (MIT)[143] and further developed
        his knowledge ranging from artificial intelligence to quantum mechanics
        as time progressed. His expertise extends to his ingenuity in dealing
        with difficult situations, such as difficult foes and deathtraps, in
        which he is capable of using available tools, including his suit, in
        unorthodox but effective ways. For instance, in Stark's final
        confrontation with Obadiah Stane, the villain managed to have Stark's
        companions in an unconscious state in a room with motion sensors; when
        Stark entered the room, Stane warned him that the slightest move would
        trigger a fatal electrical current to his hostages, thus forcing Stark
        to stay still and slowly die of dehydration lest he wants his friends to
        die. However, while Stane was confident that such a trap was
        inescapable, Stark is able to outwit and defeat its mechanism in
        seconds, thus freeing the hostages and allowing him to continue the
        battle against Stane.[144] He is well respected in the business world,
        able to command people's attention when he speaks on economic matters,
        having over the years built up several multimillion-dollar companies
        from virtually nothing. He is noted for the loyalty he commands from and
        returns to those who work for him, as well as for his business ethics.
        Thus he immediately fired an employee who made profitable, but illegal,
        sales to Doctor Doom.[48] He strives to be environmentally responsible
        in his businesses. At a time when Stark was unable to use his armor for
        a period, he received some combat training from Captain America and has
        become physically formidable on his own when the situation demands
        it.[145] In addition, Stark possesses great business and political
        acumen. On multiple occasions he reacquired control of his companies
        after losing them amid corporate takeovers.[146] Due to his membership
        in the Illuminati, Iron Man was given the Space Infinity Gem to
        safeguard.[147] It allows the user to exist in any location (or all
        locations), move any object anywhere throughout the universe and warp or
        rearrange space. Supporting characters Main article: List of Iron Man
        supporting characters Other versions 1602 1602: New World features a
        17th-century Spanish Iron Man named Lord Iron. Taken captive in the Holy
        Land during the English / Spanish war, he is forced to make weapons for
        them after being tortured by David Banner, the later Hulk of that world.
        He needs his massive armor to survive. The armor is powered by
        "lightning bottles" and provides him with super-strength and
        invulnerability as well as several electricity-powered[volume & issue
        needed] With his Moorish associate, Rhodes, Lord Iron is assigned by
        King James to put an end to the traitors and witchbreed in the New
        World. Instead, he realizes he has let bitterness consume him, and makes
        his peace with Banner. He is last seen using his armor to power the
        colony's printing press.[volume & issue needed] 1872 The Secret Wars War
        Zone tie-in 1872 reimagines Tony in the Wild West. Tony was once a
        respected inventor who lives in the town of Timely. When the Union army
        used his repeating rifle to slaughter a large group of Confederates
        rather let them surrender, Tony spirals into alcoholism. After Sheriff
        Steve Rogers is murdered by Mayor Wilson Fisk and his cohorts, Tony
        builds a large suit of armor resembling the original Iron Man suit to
        aid Red Wolf in bringing him down. After Fisk is defeated, Tony
        dedicates his time to aiding the people of Timely with his new
        invention.[148] 2020 Iron Man 2020 features Arno Stark as a mercenary in
        the employ of Sunset Bain.[149] In 2012, Arno had traveled to the past
        in an effort to save his family from a madman's bomb. All he needs are
        the retinal patterns of the bomb maker, but he runs into the original
        Blizzard who mistakes him for the "real" Iron Man/Tony Stark. Not having
        time to deal with this threat, Arno kills Blizzard. While attempting to
        scan the retinal patterns of the young terrorist, Spider-Man snatches
        the scanner with his webbing and asks IM 2020 what he is doing. The two
        battle one another (Arno is "against the clock") when suddenly Arno is
        pulled back to his time to discover the bomb had a design flaw and
        exploded prematurely. His wife, son, employees, and factory have all
        been destroyed.[150] 2093 Tony Stark and Doctor Doom are brought to the
        year 2093 by Merlin to stop a plot by a primarily robotic Doom and the
        Iron Man of 2093, Andros Stark. Andros is a psychotic madman and uses
        his grandfather Arno's armor. Tony defeats Andros while wielding the
        legendary sword Excalibur.[151] Andros Stark/Iron Man 2099 voiced by
        Alessandro Juliani would later be adopted into the second season of Iron
        Man: Armored Adventures with him being from the year 2099 and traveling
        back when Tony was a teenager before inventing a A.I. named "Vortex".
        Vortex dooms the entire human race with Andros donning a futuristic suit
        (classed "Hyperspace Mark XL") and the Extremis to kill Tony/Iron Man
        but goes to S.H.I.E.L.D. for assistance. Andros destroys Iron Man with
        his ultra-beam, afterward, Hawkeye managed to implant the virus on
        Andros's armor, and realized that all this is because Tony was trying to
        save himself by using the virus to stop Andros using his nano-virus
        which is actually the original seed for the Vortex virus. He travels
        back in time for a short moment to warn Iron Man that his nano-virus
        chips were actually the Vortex virus. He quickly destroys the last
        nano-virus arrow, saving Andros. As a result of this change in the
        timeline, the future was saved and because of this, Andros is erased
        from existence after saying his last words to his grandfather.[volume &
        issue needed] 2099 In the Marvel 2099 line, the new Iron Man of that era
        is a man named Sonny Frisco. Despite piloting a normal-sized suit of
        Iron Man armor, Frisco actually suffers from dwarfism. He is a member of
        the Alchemax corporation's team of Avengers, and secretly uses the help
        of Vision, a woman with precognitive abilities.[152] 3030 The Iron Man
        of 3030 is Tony Stark's biracial granddaughter, Rhodey Stark (named
        after Stark's close friend James Rhodes). She travels to the present in
        order to help the Avengers save Earth from a rogue planet that had been
        fired from the future, and departs after warning her grandfather that
        his life is in danger.[153] Adam Warlock In Adam Warlock #2 (1972),
        Peter Parker's counterpart on Counter-Earth mentions that "the heart of
        Tony Stark beats unscathed".[volume & issue needed] Age of Apocalypse In
        the Age of Apocalypse, Tony Stark is an agent of the Human High Council.
        The injury that compromised his heart is caused by the attack of a
        mutant.[volume & issue needed] Age of X Main article: Age of X
        Officially code named Iron Man, he prefers the name Steel Corpse. Iron
        Man was infected by a disease, thought to be of mutant origin, that
        bonded him permanently to his armor. Not only can he never remove the
        armor, the disease is causing the armor to slowly consume his flesh,
        meaning that one day Tony Stark will cease to exist and only the armor
        will be left. He works with this reality's version of the Avengers to
        exterminate all mutants, but eventually rebels against his purpose when
        a 'Trojan horse' in the armor nearly drives him to kill innocent mutant
        children, forcing his teammates to kill him.[154] Avataars In the sword
        and sorcery world of the Avataars: Covenant of the Shield miniseries,
        Iron Man's counterpart is Ironheart, one of the Champions of the Realm.
        A powerful warrior, he wears a huge suit of grey armor.[volume & issue
        needed] Bullet Points In Bullet Points, Iron Man is Steve Rogers, who,
        due to the assassination of Dr. Abraham Erskine occurring earlier than
        in the mainstream Marvel universe, never receives the Super-Soldier
        formula. Instead, he agrees to be bonded to the prototype 'Iron Man'
        armor despite the intense physical pain and discomfort this will cause.
        Rogers is later killed fighting an alternative version of the Hulk. Tony
        Stark, in this reality a member of S.H.I.E.L.D., expresses a desire to
        continue in Rogers' footsteps as Iron Man, but is rejected owing to a
        heart condition. He later disobeys this command and adopts the mantle
        upon the arrival of Galactus.[volume & issue needed] Contest of
        Champions The 2015 Contest of Champions series has a version of Tony
        Stark that won Civil War with nearly everything working out in his
        favor. Five years later, Tony has donned the Iron Patriot armor and is
        the President of the United States. He and his Mighty Avengers team are
        kidnapped by Maestro and placed onto Battleworld, where Maestro alters
        their memories to believe the remaining heroes are unregistered and need
        to be taken in. Their fight is interrupted by that universe's
        Thunderbolts (led by Steve Rogers).[155] In the next issue, the Mighty
        Avengers battle the Thunderbolts and Renegade Champions, during which
        Tony kills Steve and reveals that the reason the Civil War went
        completely in his favor was because he used the Reality Gem from the
        Infinity Gauntlet. When he tries to use it again on Battleworld, it
        doesn't work because he's in a different dimension, and he's killed by
        Maestro.[156] Earth X In the alternative reality of Earth X, Tony Stark
        builds a headquarters that protects himself from a plague that grants
        all humans superpowers. Afterwards, he builds the Iron Avengers. His
        headquarters is revealed to be a giant armor, based on the old Godzilla
        fighting mecha, the Red Ronin, which he uses to delay the Celestial
        attack until the coming of Galactus, sacrificing his life in the
        process. In Paradise X, he becomes part of the angelic Avenging Host of
        Marvel's "Paradise", with an Iron Man motif.[volume & issue needed]
        Earth-691 In the continuity of Earth-691, Tony Stark is devastated by
        the horrors of the Martian invasion and jettisons his technology into
        space. It is found by a primitive alien race who use it to become an
        interstellar menace calling themselves the Stark, who subsequently clash
        with the Guardians of the Galaxy in the 31st century.[157] "Standard"
        continuity Iron Man (Earth-616) encountered his "creations" when a cadre
        of rational, scientific members of the Stark called the Programmers
        bring Tony Stark to the future to help them solve various planet-wide
        problems.[158] Earth-2122 In the continuity of Earth-2122, the home of
        Crusader X, where the British won the American Revolution and still
        control North America, Anthony Stark is a member of a group called the
        Sons of Liberty. In this reality, Stark is willing to kill innocent
        people.[159] Earth-3490 In the continuity of Earth-3490, Tony Stark was
        born a woman (Natasha Stark) rather than a man; Stark's superhero
        alter-ego in this universe is Iron Woman. The Civil War between
        superheroes in Earth-3490 was averted due to the fact that Stark and
        Steve Rogers (Captain America) are romantically involved, and have since
        married.[160] Exiles In Exiles, a villainous alternative Iron Man of
        Earth-2020 is a member of Weapon X, the more ruthless team of reality
        fixers.[161] After ending up at the 'Crystal Palace' (the Exiles'
        headquarters) and fighting them there, he is eventually exposed and sent
        back to his own timeline where he is arrested by the Army for starting a
        world war.[162] In one alternative reality Tony Stark has become the
        absolute ruler of the entire planet Earth, and kills many of that
        Earth's heroes and mutants. Weapon X arrives on this reality to help him
        conquer Attilan, though their true purpose is to cause his downfall.
        Tony is eventually killed by Susan Storm.[163] In one alternative
        reality he is partners with both Mr. Fantastic and Doctor Octopus before
        he created the Iron Man suit.[164] On an alternative world devastated by
        the Hulk's Annihilation Wave, Iron Man was one of those killed in the
        attack. When the Exiles arrange for the dead heroes to be replaced by
        alternatives, Iron Man's replacement is a version of Spitfire, on the
        grounds that they have never got along with any alternative Tony
        Starks.[165] The Sons of Iron are a group of armor-wearing warriors from
        an Earth shared by humans and reptilian humanoids. Because they are
        completely concealed by the Iron Man armor, no-one can tell which they
        are.[166] Fantastic Four: The End In the miniseries Fantastic Four: The
        End, which is set in a future where Reed Richards' technology has
        launched humanity into a golden age, Tony Stark has died long ago - but
        his consciousness survives, 'hopping' from artificial body to artificial
        body. Most of the bodies shown in the miniseries resemble Iron Man
        armors, often being identical to existing armors. One notable exception
        was the bulky, stocky space-armor which played an important role in the
        battle of humanity's heroes versus several alien armadas.[volume & issue
        needed] House of M Born to Howard and Maria Stark, the heads of the
        powerful business conglomerate Stark Industries, Tony Stark grew to be
        an imaginative and brilliant inventor. He worked with his father from an
        early age, and surpassed his father's technical brilliance by the age of
        16. Stark became the key supplier of hi-tech weaponry used to fight
        mutants, and was on the verge of a technological breakthrough when the
        Mutant-Human war came to an end. The suits are powered down to become
        part of a game called Robo Death Match, a television sport with giant
        robots fighting each other. Stark Industries scored its biggest victory
        when it secured the Sentinel production contracts, pushing major
        competitor, Jason Wyngarde, out of business. Erik Magnus and Sebastian
        Shaw awarded Tony the contract under the condition that he would hire
        Beast and Forge as observers. McCoy became a key contributor along with
        Doctor Pym on The Vision project. Tony secretly worked on a special
        project beneath Stark Industries: a brand new suit of hi-tech armor he
        planned to use as his new Robo Death Match suit.[167] Iron Man: The End
        In the one-shot Iron Man: The End, an aging Tony Stark works on his
        greatest creation, a space elevator called "Big Jump." Stark faces
        retirement due to age and the physical toll of an illness, no longer
        allowing him to run his business "Stark Universal" and continue to be
        Iron Man. This leads to the need to groom a replacement.[volume & issue
        needed] Iron Maniac Iron Maniac is an evil alternative universe version
        of Iron Man from Earth-5012. He first appeared in Marvel Team-Up vol. 3
        #2, wearing armor that resembles that of Doctor Doom's. He comes from an
        alternative reality where most of the Avengers were killed when they
        encountered the vicious alien Titannus in space. While the team is
        rescued by the reserve Avengers five years later, it takes another five
        years to fight back the Trellions, the alien race that has brainwashed
        Titannus. During that time, a power-hungry Reed Richards turns his back
        on the surviving heroes. Scarred for life due to an attack from the
        Human Torch, Iron Man sets his own operation base in Latveria to "take
        over the world to save it from Richards." Richards somehow manages to
        banish him into Earth-616 Other differences between his world and
        Earth-616 include that there is no Spider-Man, and that Hank Pym is
        another version of the Hulk.[volume & issue needed] After being
        transported to Earth-616, Iron Maniac fights the Fantastic Four and
        Doctor Strange, all of whom mistake him for their Doctor Doom. After
        unmasking himself, they learn his true identity, shortly before he
        manages to temporarily negate the FF's powers and escape, concluding
        that he has no reason to trust that they will not turn on him like the
        FF of his world did. Capturing a recently discovered mutant, the
        alternative Iron Man attempts to return to his home dimension by using
        the mutant as a power source, but is attacked by Spider-Man and X-23 as
        they investigate the situation. After the appearance of Captain America
        and Black Widow, he realizes that he is in an alternative world, but
        continues to fight the heroes, calling them all 'Richards' lackeys',
        proclaiming that he can't trust that they won't turn into 'villains'
        just as his own former allies did. He is defeated thanks to Spider-Man
        and X-23's use of their own version of the fastball special to destroy
        his equipment, shortly after 'warning' the other heroes of the Titannus
        War (by saying that he would not kill them now because it would be a
        kindness).[volume & issue needed] While the alternative Tony Stark is
        kept locked up and drugged in the S.H.I.E.L.D. helicarrier, he is
        briefly visited by his counterpart in this universe, although he is
        unaware of the visit. Shortly after the alternative Stark is transferred
        to a conventional cell, Titannus soon arrives and fights the heroes,
        this time confronting a new group of Defenders assembled by Doctor
        Strange. When Titannus' comatose lover is revived, she tells him that
        she never loved him and that he was insane, causing Titannus to kill
        himself. The alternative Iron Man later discovers from Spider-Man and
        Wolverine that the Avengers were never massacred in space in this
        reality because the group had been disassembled; as a result, other
        heroes only encountered Titannus after he had attacked Tokyo in a rage,
        leaving the heroes who did encounter him less inclined to believe his
        story and averting the so-called 'Titannus War'.[168] Stark subsequently
        broke free from captivity, having immunized himself to the gas that was
        used to keep him sedated on board the S.H.I.E.L.D. Helicarrier. In the
        process, he gained the unwilling alliance of the LMD Diamondback. Having
        convinced her that he is the "real" Tony, the AU Tony Stark erased her
        memories, reshaping the former LMD into an advanced suit of armor. This
        armor, even more advanced than the pre-Extremis suit Iron Man wore at
        that time, was able to replicate any weapon from the wearer's memory. He
        subsequently battled Spider-Man, Wolverine, Captain America and Luke
        Cage, but was only defeated after the sacrifice of rookie hero Freedom
        Ring, who kept Iron Maniac occupied long enough for Captain America to
        knock him out with a shield thrown at the back of his neck.[169] The
        name Iron Maniac is what he calls himself, due to being the "sole
        survivor of a sane world living in a backwards, insane world".[volume &
        issue needed] Iron Maniac is known to be at least partially cyberized,
        with armor plating implanted in his chest (revealed during his escape
        from the Helicarrier, when he is shot). It is unknown whether the rest
        of his body is similarly armored or if he possesses other cybernetic
        enhancements.[volume & issue needed] He has been briefly mentioned as
        being held in a S.H.I.E.L.D. Helicarrier recently in The Irredeemable
        Ant-Man.[citation needed] Iron Man Noir In Iron Man Noir, Tony Stark is
        an industrialist in the 1930s. He is also an adventurer, whose exploits
        are recorded in Marvels: A Magazine Of Men's Adventure. He is initially
        accompanied by his associate James Rhodes, his personal assistant
        Giulietta Nefaria and his biographer Vergil Munsey. When Nefaria is
        revealed as working with the Nazis (specifically Baron Zemo and Baron
        von Strucker) and Vergil is killed, their role in the story is taken by
        Stark's new biographer Pepper Potts. His heart having been damaged on an
        earlier adventure, Stark keeps it going with repulsor technology
        installed and recharged by Stark Industries engineer Edwin Jarvis.[170]
        While investigating a mysterious power source in the ruins of Atlantis,
        Pepper Potts gets kidnapped by the Nazis and taken to their stronghold
        in Norway. To rescue her, Stark and Rhodes don suits of bulky power
        armour built by Jarvis, but are shocked to discover that 'Baron Zemo' is
        actually Tony's missing father Howard Stark, brainwashed by a unique
        chemical compound to serve the Nazis. Despite his depleted power supply,
        Tony manages to destroy the various suits of armor that Zemo had built
        for the Nazis, concluding that his father had died long ago, before
        returning to the USA.[171] Inter-company crossovers In Marvel and DC's
        Amalgam Comics, Stark is merged with the Green Lantern Hal Jordan into
        the Iron Lantern. "Hal Stark" wears a suit resembling a green Iron Man
        armor, powered by a Green Lantern battery.[172] In the miniseries
        JLA/Avengers, Iron Man aids the Avengers in the battle against Starro
        the Conqueror. Afterwards, he creates a dimensional alarm in order to
        tell when invaders from another dimension come into their universe.
        After a brief scuffle with the JLA in the Savage Land, the Avengers are
        confronted by Metron, who gives Tony a Mother Box. Using this, Tony is
        able to get the Avengers to Metropolis, where the Avengers confront the
        JLA again.[173] The Avengers escape, but Tony and Hawkeye manage to take
        Green Lantern's Power Battery before they leave, with Tony able to stop
        the Flash in his tracks. The two later take down Captain Atom and Green
        Arrow in order to collect the Casket of Ancient Winters. Tony then
        leaves and arrives to save Photon and Quasar from Wonder Woman and Green
        Lantern, allowing them to take the Spear of Destiny.[174] After the
        battle in the Savage Land, Tony is one of the Avengers and is clueless
        as to the dimensional shifts that are happening around him. After Cap
        and Superman attack each other, Tony ends up in Metropolis. When the two
        worlds are briefly corrected by the Grandmaster, Tony is shown his true
        future with his alcoholism and his defeat by Obadiah Stane.[175]
        Accepting this, he aids the JLA and the Avengers in the final battle and
        helped build the ship that took them to Krona's base. During the battle,
        he teams up with Kyle Rayner to create a weapon to use against their
        enemies and the two are shown to be impressed by one another, Kyle
        expressing his awe at Tony's engineering prowess and Tony asking Kyle
        where he could get a Green Lantern ring.[176] Mangaverse In the Marvel
        Mangaverse reality, Tony Stark creates the original armor together with
        Dr. Ho Yinsen and acts as Iron Man for a time, but eventually vanishes
        after a battle with Namor, the Submariner. He is succeeded by Antoinette
        (Toni) Stark, his twin sister, a former agent of SHIELD, who turns Iron
        Man into a massive operation - a veritable army of Iron Men in many
        forms, with herself as Iron Woman. After she dies in battle against the
        Hulk, Tony Stark reveals himself again; he has gone underground after
        spinal cancer reduced him to a disembodied head hooked up to a life
        support system. However, he has designed a new armor, and a body that he
        can integrate with.[volume & issue needed] He also had designed four
        massive vehicles for the Avengers of his world to use, which could
        combine (in a manner resembling old fashioned combining super robots
        like Combattler V and Voltes V) into a skyscraper-sized Iron Man-mecha
        (Dubbed Ultimate Iron Man in its first appearance, then the Iron Avenger
        in its battle with the Hulk and finally simply called "the Avenger's
        mecha" in Volume 2 of the series). Unfortunately it was quickly
        destroyed by that world's Hulk. Apparently, however, it was rebuilt
        again by the time of the second volume, this time as a single robotic
        unit without transformation (or, if it was capable of transformation, it
        was never demonstrated). This unit helped fight off the giant Galactus
        spores, but was later destroyed, along with most of the Avengers,
        single-handedly by the Mangaverse version of Dr. Doom.[volume & issue
        needed] Marvel Adventures The Marvel Adventures Iron Man is very similar
        to the Earth-616 Iron Man, but with some changes. Instead of suffering
        damage to his heart due to a booby trap in Vietnam, Tony Stark's heart
        was damaged when an experimental plane he was flying was brought down by
        AIM. AIM wanted Stark to build weapons and devices for them. Dr. Gia-Bao
        Yinsen aided Tony in escaping AIM, but Yinsen died saving his country
        from AIM. Iron Man does not seem to have problems with alcoholism, since
        the Marvel Adventures is aimed at a younger demographic. Iron Man's
        armor resembles his Extremis armor although Iron Man has other armors
        that fit over his regular armor, as in the case of his underwater
        armor.[volume & issue needed] Marvel Apes The version of Iron Man
        appearing in the Marvel Apes mini-series is a mandrill, appropriately
        being named the Iron Mandrill. He is a member of the Apevengers. At one
        point, he is attacked by the zombified Wasp of the Marvel Zombies
        universe and infected, though he is later apparently cured when these
        events are undone via time travel.[177][178][179] Marvel Zombies The
        first series In the Marvel Zombies universe, Tony Stark has been
        infected by the zombie virus. Alongside a horde of starving undead
        superhuman zombies, Iron Man attacks the Silver Surfer. The attack is
        successful, but one of the Surfer's energy bolts hits Iron Man's lower
        torso, cutting him in half. The zombie "survives" this wound and later
        gains cosmic powers (including flight) by eating part of the Surfer's
        corpse. When Galactus arrives, Iron Man and the five other surviving
        zombies devour him. They are able to absorb Galactus' power, and call
        themselves "The Galacti".[volume & issue needed] Marvel Zombies 2 He
        also appears in Marvel Zombies 2, one of the small group of
        super-powered zombies that have eaten their way across all known space.
        Here Stark has had his entire lost lower body replaced with cybernetics.
        He also appears to have forgotten he had some design in the machine
        which opened a link to the Ultimate Universe. He was shocked to see
        Forge, one of the surviving X-Men, wearing his Mark I armored suit. The
        zombified Hulk kills Iron Man when he stomps through the armor, forcing
        Tony Stark's flesh and blood through any openings left in the armor.
        However Iron Man had recently revived next issue, but only as a cameo,
        on Marvel Zombies 3.[volume & issue needed] Marvel Zombies Return In the
        final issue of Marvel Zombies 2, the remaining zombies are transported
        to another universe. At the point where the zombies reach this new
        reality, the period is nearly identical to the one where Tony Stark was
        an alcoholic. Zombie Giant Man infects Happy Hogan, Pepper Potts and a
        number of other people at Stark Industries. A drunken Tony Stark lacks
        the will power to become Iron Man despite Pepper Potts' requests, so
        James Rhodes dons the suit to save him. Crucial to fate of the
        multiverse are the nanites that Stark has accidentally created, which
        destroy damaged flesh and tissue as a cure for cancer, and prove to be a
        potent weapon against the zombies. This was grafted onto Flint Marko's
        body. He sacrifices himself to kill several zombies in Stark Tower, with
        Rhodes permanently succeeding him in the role of Iron Man.[180] His
        nanites are then used by his successor, now a member of the New
        Avengers, years later to kill the remaining super-powered zombies and
        end the inter-dimensional zombie threat.[181] MC2 In the alternative
        future of MC2, Tony Stark retires after the loss of many heroes in
        battle, but eventually creates the armored computer program Mainframe,
        which joins the next generation of Avengers.[volume & issue needed] Mini
        Marvels This section may require cleanup to meet Wikipedia's quality
        standards. The specific problem is: unencyclopedic summation. Please
        help improve this section if you can. (December 2012) (Learn how and
        when to remove this template message) Iron Man is a recurring character
        in "Mini Marvels". He appears in story arcs like "The Armored Avengers"
        & "World War Hulk". He is portrayed as conceited and thinks himself the
        best of the team. He has a friendly rivalry with Hawkeye.[volume & issue
        needed] Newuniversal In the alternative world of newuniversal, Tony
        Stark is one of three humans altered by the Fireworks on April 26, 1953,
        gaining abilities associated with the Cipher glyph. Prior to the
        Fireworks, Stark is unexceptional, but he then becomes a technological
        genius. His discoveries revitalise his father's company, Stark
        Industries, and are "five years ahead of everything everyone else is
        working on". There are suggestions that he is capable of more, but is
        not making all of his discoveries public.[volume & issue needed] Stark's
        transformation is noticed by the National Security Agency's Project
        Spitfire, which is discreetly monitoring the superhumans created by the
        Fireworks. In March 1959, Stark's plane crashes in North Vietnam and he
        is imprisoned. He escapes by constructing an Iron Man suit from "spare
        parts" and flying out of the country.[volume & issue needed] On April 4,
        1959, when he returns to the US, the NSA takes Stark to a San Diego
        naval base, ostensibly to debrief him. Stark is then shot dead by Philip
        L. Voight, a Project Spitfire agent, to prevent him from making contact
        with the other superhumans.[182] The Iron Man suit is seized by Project
        Spitfire and reverse engineered by Doctor Joe Swann, eventually becoming
        the basis of the project's H.E.X suit, an exoskeleton designed for
        combat with superhumans.[183] Ruins In the two issue Warren Ellis series
        Ruins, Tony Stark is a rich industrialist who supplied weapons for the
        US military in an attempt to win the Vietnam War. This version of Iron
        Man was injured while mediating between US forces and pro-secessionist
        Californians by a piece of shrapnel thrown by the National Guard. This
        embittered Stark who formed a revolutionary cell named the Avengers.
        This version of Iron Man was betrayed by Scarlet Witch who provided the
        United States military information to crush the Avengers. Tony Stark is
        presumably killed.[184] Spider-Verse In the Amazing Spider-Man comic's
        event Spider-Verse, Spider-Woman (Jessica Drew), Scarlet Spider (Kaine)
        and Spider-man (Ben Reily) meet and fight a clone of Tony Stark
        (Earth-802) as Iron Man serving one of the Inheritors, Jennix.[185]
        Spider-Island In a Secret Wars Warzone version of Spider-Island, he is
        mutated into one of the Spider Queen's spider minions and battles Agent
        Venom and the now monstrous Avengers. Venom sprays Tony with Norman
        Osborn's Green Goblin formula, freeing Tony from the Queen, but slowly
        making him insane. He modifies Norman's armor and becomes the Iron
        Goblin to aid the resistance. When they are surrounded by a number of
        spider creatures (including Giant Man) with few means of escape, Tony
        sacrifices himself using the Black Knight's Ebony Blade so he can aid
        them and die before the Goblin formula completely takes him over.[volume
        & issue needed] Spider-Gwen In Spider-Gwen Tony Stark of Earth-65 is an
        arms dealer, the owner of global private military company WAR MACHINE,
        and owner of the coffee chain StarkBucks.[186] Spider-Man: Life Story In
        Spider-Man: Life Story, Tony Stark/Iron Man does not face a traumatizing
        experience that leads to stop weapons manufacturing as his Earth-616
        counterpart did instead he continues to produce them and play a key role
        in the Vietnam War and a World War III-esque conflict known as "The
        Russian War" as well as participating in Secret Wars while on
        Battleworld. Iron Man also became Secretary of Defense in the United
        States government and was one of the two leaders alongside Captain
        America in the Superhuman Civil War.[volume & issue needed] Squadron
        Supreme In the Squadron Supreme series, the equivalent of Iron Man is
        Tucker Ford.[original research?] Tucker was a very intelligent boy since
        his early years, however since being raised by his strong-willed mother
        along with never going to school with anyone his own age made Tucker to
        have difficulty to make any kind of meaningful personal relationship and
        because of this, he became very introverted.[187] As he grew up, he had
        built an imaginative world where he was a superhero. When trying to
        explain his imaginations to his therapist, they turned around and mocked
        him before their colleagues, however being unaware that Tucker had them
        under electronic surveillance. This experience motivated him to follow
        his dream and become a real superhero.[volume & issue needed] As a young
        adult, he built a powerful, but unstable armour made from nanotechnology
        in order to achieve his dream, eventually meeting the head of
        S.H.I.E.L.D., Nick Fury and offered his intelligence and company to Nick
        Fury to help defend America.[volume & issue needed] He fails to gain the
        affection of Nick Fury and to get a kiss from the spider-powered
        superhuman, Nell Ruggles, also known as Arachnophilia.[volume & issue
        needed] He offers to build a S.H.I.E.L.D. Hellicarrier as a base for the
        organization and to be a member of the team in order to live out of his
        imagination. The only person that Tucker had the closest relationship
        with is Nell, expressing romantic feelings towards her.[188] Ultimate
        Marvel Main articles: Ultimate Iron Man and Iron Man (Ultimate Marvel
        character) What If Newer Fantastic Four In the timeline of What if:
        Newer Fantastic Four, the Fantastic Four were killed by De'Lila (a rogue
        Skrull) and the Hulk, so Spider-Man, the Ghost Rider and Wolverine
        joined together to avenge them as the New Fantastic Four. Thanos of
        Titan, as in the mainline universe, came into possession of the six
        Infinity Gems and became ruler of all reality, before erasing half of
        all living beings from existence. Among those who vanished was Ghost
        Rider, and, being present at the battle during which he was erased, Iron
        Man takes his place. The Newer Fantastic Four soon realize they are
        outmatched. Stark, with help from the Hulk, manages to salvage the empty
        armor of Ziran, a Celestial, and realizes it can be controlled by
        thoughts. Stark takes control of the armor and connects it to the
        Negative Zone, allowing him to call on all the power of that reality.
        Despite this, he is defeated by Thanos. Stark's sacrifice allows
        Wolverine to trick Thanos into a position where the Gauntlet could be
        removed. Spider-Man subsequently uses the Gauntlet to undo the damage
        Thanos had caused.[189] Iron Man: Demon in an Armor In What If: Iron
        Man: Demon in an Armor, Tony Stark is Doom's college roommate rather
        than Reed Richards, inspiring Doom to develop a machine that allows him
        to transfer his mind into Stark's body while leaving Stark trapped in
        Doom's body with no memory of his past. While Doom uses Stark's
        connections and company to establish himself, the amnesic Stark-
        believing himself to be Doom- works to rebuild his life, creating his
        own company and forming his own reputation from the ground up. This
        culminates in a confrontation between the two wearing early versions of
        their respective armours- Doom having developed a green-and-silver Iron
        Man armour while Stark has created Doom's costume with gold and a red
        cloak-, during which Doom reveals the truth about their switch, only for
        Stark to reject the offer to switch back because Doom has destroyed the
        name of Tony Stark while Doctor von Doom has developed an honorable
        reputation.[volume & issue needed] Realm of Kings In this one-shot,
        Quasar, the newly resurrected Protector of the Universe travels into the
        Fault, the immense tear which has appeared in the fabric of spacetime
        itself after the catastrophic battle between Vulcan and Black Bolt.
        Reaching what he perceives to be the other end of the tunnel that is the
        Fault, he arrives in another universe... a dark, twisted universe, the
        `corpse of a universe´, possessed by Lovecraftian horrors which are
        worshipped by all the denizens of that universe, including Earth's
        mightiest heroes. Iron Man is never seen outside his armor, but he, like
        the others, serves the "Many-angled ones" with total devotion.[190]
        X-Men Forever In this alternative universe of X-Men Forever, Tony Stark,
        while still publicly the super-hero Iron Man, is also the head of the
        shadowy organization known as The Consortium. The scientific wing of the
        organization is headed by the Trask family, who turn out to be his
        relatives. They create newer versions of the Sentinels and kidnap
        mutants to use in experimentation to find the cause of the so-called
        "Burnout" syndrome that causes mutants to die early.[191] However, as
        part of his efforts to undermine the Consortium's anti-mutant agenda, he
        becomes Nick Fury's insider and eventually sacrifices his life along
        with Beast.[192] He assists Storm- who has been split into an amnesic
        child version of herself and an energy form with full memory and no
        body- by providing her energy self with a suit based on the now-deceased
        Black Panther so that her energy can maintain corporeal form, although
        he is subsequently killed by a twisted clone of Storm before he can
        reveal her existence to anyone else.[volume & issue needed] Mutant X In
        Mutant X, Tony Stark is Iron Giant Man and part of the anti-mutant group
        the Avengers. He was later killed by X-Man Captain America along with
        the other Avengers.[volume & issue needed] Infinity Warps During the
        Infinity Wars storyline, where the universe was combined in half, Iron
        Man was fused with Thor creating Iron Hammer. Sigurd Stark was the fifth
        richest person on the world thanks to his genius about technology,
        however due to his lack of memories before five years, taunted him
        driving to drink. After going through the Norvegian, he was attacked by
        some Dark Elves, lead by Krimson Kurse (fusion Crimson Dynamo and
        Kurse). He got poisoned by an arrow, slowing killing him and taken by
        the Elves to aid their other prisoner Eitri (fusion of Eitri and Ho
        Yinsen) in order to build powerful weapons for the Elves. Then, Sigurd
        became friend with Eitri and together build an armor, that prevented the
        poison from killing Sigurd, along with a hammer in order to escape the
        Dark Elves. However, during their escape Eitri is killed and after
        Sigurd defeated the Elves and Krimson Kurse, he discovered that Krimson
        was his lost friend who had turned into a Thrall to be a servant to Dark
        Elves and after that he mercy killed his friend. Sigurd then decided to
        the All-Father on Asgard to seek help into defeating Malekith (fusion of
        Malekith and Mandarin) and with the help of his A.I. assistant
        H.E.I.M.D.A.L.L. (fusion of Heimdall and J.A.R.V.I.S.) opened the
        B.I.F.R.O.S.T. and went to Asgard. When travelling, he remembered his
        old memories: his true name was Stark Odinson, who due to his arrogance,
        his father Howard Odin (fusion of Howard Stark and Odin) banished his
        son to Earth where he would learn to how is like to be a mortal. Upon
        arriving, Malekith had trapped the Aesir and had allied with Madame Hel
        (fusion of Madame Masque and Hela and Stane Odinson (fusion of Loki and
        Obadiah Stane). Luckily, Iron Hammer was able to defeat Malekith and
        Odin allowed his son to become a god again, however Sigurd refused,
        feeling better as a human.
      </div>
    </>
  );
}

export default App;
