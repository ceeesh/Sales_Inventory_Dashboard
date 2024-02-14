import { toast } from 'react-toastify';

export default function successHandler(success) {
    if(success){
        toast.success(success)
    }
  }