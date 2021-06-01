


const products = [
	{
		id:1,
		shopname:"a",
		imgurl:"",
		like:false
	},
	{
		id:2,
		shopname:"b",
		imgurl:"",
		like:false
	},
	{
		id:3,
		shopname:"c",
		imgurl:"",
		like:false
	},
	{
		id:4,
		shopname:"d",
		imgurl:"",
		like:false
	}
];

const app = {
	data(){
		return {
			products : []

		}

	},
	methods:{

	},
	created(){
		this.products = products;


	}
};

Vue.createApp(app).mount('#app');
