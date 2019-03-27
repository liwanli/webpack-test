
const path = require('path');



module.exports = {
	entry: path.resolve(__dirname,'./index.js'),
    path: path.resolve(__dirname,'./dist'),
	resolve:{

	},
	modules:{

	},
	loaders:{
		rule:[{
			test:/\.js$/,
			loader:"babel-loader"
		},{

		}]
	},
	plugins:[],
	devServer:{}
}