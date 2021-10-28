import Link from 'next/link'
import Imagem from 'next/image'
import useAuth from '../../data/hook/useAuth'

interface AvatarUsuarioProps {
  className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
  const { usuario } = useAuth()

  return (
    <Link passHref href='/perfil'>
      <Imagem src={usuario?.imagemUrl ?? '/images/avatar.svg'}
        alt="Avatar do usuário"
        className={`
        h-10 w-10 rounded-full cursor-pointer
        ${props.className}
        `}
      />
    </Link>
  )
}