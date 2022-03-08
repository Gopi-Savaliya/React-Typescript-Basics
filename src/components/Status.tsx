type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

function Status(props: StatusProps) {
    let msg;
    if(props.status==='loading') {
        msg='loading'
    } else if(props.status==='success') {
        msg='success'
    } else if(props.status==='error') {
        msg='error'
    }
  return (
    <div>Status: {msg}</div>
  )
}

export default Status