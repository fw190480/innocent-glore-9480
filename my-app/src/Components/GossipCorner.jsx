import React from 'react'

export default function GossipCorner() {
    let arr = [
        `https://scontent.cdninstagram.com/v/t51.2885-15/302126689_2237098829772567_4772389823159687835_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=9Usg-_mlb8wAX8iw8Rv&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8WerAeZeonTRP4IR1ZY3IRmYMBNu5dpJFOE6cyIZKu4g&oe=630EE7B2`,
        `https://scontent.cdninstagram.com/v/t51.2885-15/301795655_495569362311331_2221556910645625_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=waafzZU-J_AAX_-OyAZ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9nAwt9bEME2aKy-qiJxvBUwHtpg50uwjMCz-cdP7oCrA&oe=630FC1E6`,
        `https://scontent.cdninstagram.com/v/t51.2885-15/301984033_742020337090796_6393796319284111928_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=vovj1SAz1k4AX-s1RyL&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT90xP4J6zbxfRjBGDEG0uOqaLURpk2vsoVhUVjHN8nd4A&oe=630ED239`,
        `https://scontent.cdninstagram.com/v/t51.2885-15/301030763_1056706611714721_265963600004988955_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=RfhS-mwDNUEAX8NzsB8&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8yPEwI1c43jN2lyx7UFnVm2Quq2WPWp_sDhiDaipznuA&oe=630F66B5`,
        `https://scontent.cdninstagram.com/v/t51.2885-15/300780300_415744050426506_996902418346204214_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=lpzvAOdZRu8AX_cDygJ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8cScU-HlN7pytnWaCfkG7oA35KvQfBmGfUtnxc2JnMKw&oe=630E1FD2`,
        `https://scontent.cdninstagram.com/v/t51.2885-15/300963745_607450630733202_2348629814306894776_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=RejXVQCxr0YAX-952kx&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT84lZu87ViF-W7l5S4CJYw4wGL2jFfpwAdZExrpd1Li5g&oe=630F9C6A`,
        `https://scontent.cdninstagram.com/v/t51.2885-15/300607305_439671718118461_4432863810807927384_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=gecelEqb3ZAAX8tyffa&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_yD58yCi2w7cxI-Lav7w-74jL9dFwp2uqB8mS3f-nRPg&oe=630FA000`,
        `https://scontent.cdninstagram.com/v/t51.2885-15/300787728_1508333222958543_5133547163213452562_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=EYDePtn4BEsAX-EiYKV&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9jtMfDVLGV1v_89pGrZS8JMMqPhj_ecCLggKAt2jN2kg&oe=630EC47C`,

    ]
  return (
    <div>
      <h1>#TRENDINGNOW AT THE GOSSIP CORNER</h1>
      <div className='flex-item'>
        {arr.map(item=><img src={item}/>)}
      </div>
    </div>
  )
}
