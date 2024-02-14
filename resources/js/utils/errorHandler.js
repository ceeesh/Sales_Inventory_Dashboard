import { toast } from 'react-toastify';

export default function errorHandler(errors) {
    if(errors){
      errors.forEach(err => toast.error(err))
    }
  }