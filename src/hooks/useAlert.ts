import React, { useState } from 'react'

const useAlert = () => {
  const [alert, setAlert] = useState<{
    show: boolean,
    text: string,
    type: 'success'|'danger',
  
  }>({
    show: false,
    text: '',
    type: 'danger',
  });

  type showAlertType = {
    show:boolean
    text: string,
    type: 'success'|'danger',
  }

  const showAlert = ({ text, type = 'danger' }:showAlertType) => setAlert({
    show: true,
    text,
    type,
  })
  const hideAlert = () => setAlert({
    show: false,
    text: '',
    type: 'danger',
  })
  return [alert, showAlert, hideAlert]
}

export default useAlert;