import React from 'react';
import AuthApi from '../../../../utils/api'

export default class InventorySummary extends React.Component {
    constructor() {
        super();
    
        this.state = {
          data: []
        };
    
      }
    
      async quantities() {
        AuthApi.getInventoriesQuantity()
          .then((res) => {
            console.log(Array(res.data))
            this.setState({
              data: Array(res.data),
            })
    
          })
      }
    
      componentDidMount() {
        this.quantities();
      }

    render() {
        return (
            <div className='mt-4'>
                <div className='d-flex flex-column gap-4'>
                    <div className='p-3 border rounded-1 d-flex justify-content-between'>
                        <p className='m-0 p-0'>QUANTITY ON HAND</p>
                        {this.state.data.map((num, idx) => 
                            <p key={idx} className='m-0 border-start ps-2'>{num.on_hand}</p>
                        )}
                        
                    </div>
                    <div className='p-3 border rounded-1 d-flex justify-content-between'>
                        <p className='m-0 p-0'>QUANTITY TO BE RECEIVED</p>
                        {this.state.data.map((num, idx) => 
                            <p key={idx} className='m-0 border-start ps-2'>{num.to_be_received}</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}