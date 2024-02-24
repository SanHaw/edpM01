import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';

type TodoCardProps = {
  id: string;
  title: string;
  complete: boolean;
}


const TodoCard = ({id, title, complete}: TodoCardProps) => {
  return (
    <div className='flexCenter'>
    <div className='flexBetween px-3 py-3 w-2/5 bg-white rounded-xl '>

      <div className='flex items-center gap-6'>
        <Checkbox id={id}/>
        <h2 className='text-black font-bold'>{title}</h2>
      </div>

      <div className='flex gap-2'>
        <DeleteButton
          todoId={id}
        />
      </div>
      </div>
    </div>
  )
}

export default TodoCard