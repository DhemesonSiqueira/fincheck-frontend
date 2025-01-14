import { useForm } from 'react-hook-form';

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
  } = useForm();

  const handleSubmit = hookFormHandleSubmit(() => {
    console.log('Hook form submit');
  });

  return { handleSubmit };
}
