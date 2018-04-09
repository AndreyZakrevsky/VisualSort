

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.data =[20, 150, 10, 160, 80, 60, 50, 120, 90, 70,  130,  100,  110 , 30, 140 , 40,170,180,200,190];
        this.state = {value: this.data};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(){
        var arr=this.state.value;
        var i = 0;
        var timerId = setInterval(() => {
            for(var j=i;j<arr.length;j++){
                 var tamp= arr[i];
              if(arr[i]>arr[j]){
                   var tamp= arr[i];
                   arr[i]=arr[j];
                   arr[j]=tamp;
              }
            }
            this.setState({value:arr});
            i++;
            if(i == arr.length-1){
                clearInterval(timerId);
            }
         return arr;
        }, 1200);
     
    
    }


   
    shouldComponentUpdate(){
         return true; 
     }
        
    componentDidMount(){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.state.value,
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data:this.state.value
                }]
            },
            options: {}
        });
    }

    componentDidUpdate(){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.state.value,
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: 'rgb(200, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data:this.state.value
                }]
            },
            options: {}
        });
    }
     

    render() {
        return (
                <div>
                        <div className="contener">
                            <canvas id="myChart"></canvas> 
                        </div>
                        <button className ="btn waves-effect waves-light" 
                            onClick={this.handleSubmit}>RUN SORTING
                         </button>
                 </div>
             );
    }
}

 ReactDOM.render(
     <Hello />,
     document.getElementById('root')
 );




