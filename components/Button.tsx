
type ButtonProps = {
    label : string
    variant? : string
}

const Button = ({label, variant}: ButtonProps) => {
  return (
    <button type='submit' className={`${variant} rounded-full`}>
        {label}
    </button>
  )
}

export default Button