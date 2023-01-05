import { css } from '@emotion/react'
import { IHero } from '../@types/IHero'
import 'animate.css'

interface IProps {
  hero: IHero,
  multiple?: number,
}

export const HeroCardPhoto = ({ hero, multiple = 1 }: IProps) => {
  return (
    <div
      css={css`
          position: relative;
          height: ${multiple * 200}px;
          width: ${multiple * 200}px;
        `}
    >
      {hero.avatar.map((a) => {
        let animates = ''
        if (a.animates?.length > 0) {
          animates = 'animate__animated '
          animates += a.animates.map((an) => 'animate__' + an).join(' ')
        }

        return (
          <picture key={hero.id}>
            <img
              className={animates}
              src={a.img}
              style={{
                left : a.style.left && a.style.left * multiple,
                right : a.style.right && a.style.right * multiple,
                top : a.style.top && a.style.top * multiple,
                width : a.style.width && a.style.width * multiple,
                position: 'absolute',
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              alt=""
            />
          </picture>
        )
      })}
    </div>
  )
}
