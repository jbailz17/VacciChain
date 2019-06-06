import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
// import Web3 from 'web3';

declare let Web3: any;

declare let window: any;

let contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "fridge_id",
				"type": "uint256"
			},
			{
				"name": "temp",
				"type": "uint256"
			}
		],
		"name": "add_fridge",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batch_id",
				"type": "uint256"
			},
			{
				"name": "_info",
				"type": "string"
			},
			{
				"name": "_temp",
				"type": "uint256"
			},
			{
				"name": "_vtype",
				"type": "uint256"
			},
			{
				"name": "_expireDate",
				"type": "uint256"
			},
			{
				"name": "_fault",
				"type": "bool"
			},
			{
				"name": "_user_id",
				"type": "uint256"
			},
			{
				"name": "_fridgeID",
				"type": "uint256"
			}
		],
		"name": "addBatch",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batch",
				"type": "uint256"
			},
			{
				"name": "_fridgeID",
				"type": "uint256"
			},
			{
				"name": "_vialNo",
				"type": "uint256"
			},
			{
				"name": "_user_id",
				"type": "uint256"
			}
		],
		"name": "addVial",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batch",
				"type": "uint256"
			},
			{
				"name": "_fridgeID",
				"type": "uint256"
			},
			{
				"name": "_vialNoStart",
				"type": "uint256"
			},
			{
				"name": "_vialNoEnd",
				"type": "uint256"
			},
			{
				"name": "_user_id",
				"type": "uint256"
			}
		],
		"name": "addVials",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "all_batches",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "all_fridges",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "all_vacci_types",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batchid",
				"type": "uint256"
			}
		],
		"name": "batch_exists",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "fridge_id",
				"type": "uint256"
			}
		],
		"name": "check_fridge_exist",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batchid",
				"type": "uint256"
			}
		],
		"name": "find_batch_using_id",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vacitype_id",
				"type": "uint256"
			}
		],
		"name": "find_batch_using_vaccitypeid",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fridgeid",
				"type": "uint256"
			}
		],
		"name": "find_current_fridge_temp",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fridgid",
				"type": "uint256"
			}
		],
		"name": "find_fridge_temp_history_using_id",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vacType",
				"type": "uint256"
			}
		],
		"name": "findValidVial",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batch",
				"type": "uint256"
			}
		],
		"name": "findValidVialFromBatch",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vID",
				"type": "uint256"
			}
		],
		"name": "findVial",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batch_id",
				"type": "uint256"
			}
		],
		"name": "findVials",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_Vialid",
				"type": "uint256"
			},
			{
				"name": "_batch_id",
				"type": "uint256"
			}
		],
		"name": "findVialusingID",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batch_id",
				"type": "uint256"
			},
			{
				"name": "start_id",
				"type": "uint256"
			},
			{
				"name": "end_id",
				"type": "uint256"
			}
		],
		"name": "if_new_vial_has_valid_id",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vial",
				"type": "uint256"
			}
		],
		"name": "markVialFault",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_temp",
				"type": "uint256"
			},
			{
				"name": "_fridgeID",
				"type": "uint256"
			}
		],
		"name": "record_temp",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batch_id",
				"type": "uint256"
			}
		],
		"name": "return_batch_fault_status",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fridgeID",
				"type": "uint256"
			}
		],
		"name": "return_batch_fault_status_on_fridge",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batch_id",
				"type": "uint256"
			}
		],
		"name": "RunBatch_ExpiryTest",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_batch",
				"type": "uint256"
			}
		],
		"name": "SubmitbatchFault",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vial",
				"type": "uint256"
			},
			{
				"name": "_batch_id",
				"type": "uint256"
			}
		],
		"name": "useVial",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vID",
				"type": "uint256"
			}
		],
		"name": "VialIDExist",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_batch_id",
				"type": "uint256"
			}
		],
		"name": "newBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "fridge_id",
				"type": "uint256"
			}
		],
		"name": "newFridge",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_vialNo",
				"type": "uint256"
			}
		],
		"name": "newVial",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Batches",
		"outputs": [
			{
				"name": "batchID",
				"type": "uint256"
			},
			{
				"name": "info",
				"type": "string"
			},
			{
				"name": "temp",
				"type": "uint256"
			},
			{
				"name": "vacType",
				"type": "uint256"
			},
			{
				"name": "recieveDate",
				"type": "uint256"
			},
			{
				"name": "expireDate",
				"type": "uint256"
			},
			{
				"name": "fault",
				"type": "bool"
			},
			{
				"name": "user_id",
				"type": "uint256"
			},
			{
				"name": "updated_at",
				"type": "uint256"
			},
			{
				"name": "fridgeID",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Fridges_Temperature",
		"outputs": [
			{
				"name": "fridgeID",
				"type": "uint256"
			},
			{
				"name": "temp",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "temp",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "temp_update_date",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tempRange",
		"outputs": [
			{
				"name": "min",
				"type": "uint256"
			},
			{
				"name": "max",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Vials",
		"outputs": [
			{
				"name": "used",
				"type": "bool"
			},
			{
				"name": "fault",
				"type": "bool"
			},
			{
				"name": "batchID",
				"type": "uint256"
			},
			{
				"name": "fridgeID",
				"type": "uint256"
			},
			{
				"name": "vialID",
				"type": "uint256"
			},
			{
				"name": "user_id",
				"type": "uint256"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	}
];

@Injectable()
export class ContractService {
  private _account: string = null;
  private _web3: any;

  private _contract: any;
  private _contractAddress: string = "0x5877c20d668eb96b2a6bd6358d79aa23bde81d85";
//   private _contractAddress: string = "0xbfdb335e03796773fb7eebd7683d2b144a71b1e5";

  constructor(private _flashMessageService: FlashMessagesService) {

    if (typeof window.web3 !== 'undefined') {
      this._web3 = new Web3(window.web3.currentProvider);
    } else {
	  	console.warn("Your browser does not support Dapps. Consider using a plugin such as MetaMask.");
    	//   this._web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
		}
	
		this.connect();
		this.getAccount();

    this._contract = this._web3.eth.contract(contractABI).at(this._contractAddress);
  }

  private async connect() {
		await window.ethereum.enable();
  }

  private async getAccount() {
	  if (this._account == null) {
		  this._account = await new Promise((resolve, reject) => {
				this._web3.eth.getAccounts((err, accs) => {
					if (!err) {
						resolve(accs[0]);
					}
				});
			}) as string;

		  this._web3.eth.defaultAccount = this._account;
	  }
	  return Promise.resolve(this._account);
  }

  public displayContract() {
		console.log("CONTRACT: ", this._contract);
  }

  // Batches

  public async addBatch(batchID: number, info: string, 
						temp: number, vtype: number, 
						expiry: number, fridgeID: number) {
							
		await this._contract.addBatch(batchID, info, temp, 
			vtype, expiry, false, 
			1, fridgeID, 
			(err => {
				if (err) {
					console.log('An error occurred: ', err);
					this._flashMessageService.show("Unable to add batch.", {cssClass: 'alert-danger', timeout: 3000});
					return;
				}
				this._flashMessageService.show("Batch added successfully.", {cssClass: 'alert-success', timeout: 3000});
				return;
		}).bind(this));
	}
	
	public async retrieveBatch(id: number) {
		if (this._account == null) {
			await this.getAccount();
		}

		return new Promise<any>((resolve, reject) => {
			this._contract.find_batch_using_id.call(id, function(err, res) {
				if (err) {
					console.log("An error occured: ", err);
					reject(err);
				}
				console.log("RES:, ", res);
				var result = [];

				result = res.map((el, index) => {
					if (index == 1 || index == 6) {
						return el;
					}
					return el.c;
				});

				resolve(result);
			});
		});
	}

  public async retrieveAllBatches() {
	  if (this._account == null) {
		  await this.getAccount();
	  }

	  return new Promise<any[]>((resolve, reject) => {
			this._contract.all_batches.call(function(err, res) {
				if (err) {
					reject(err);
				}
				
				if (res == null) {
					resolve(res);
					return;
				}

				var result = [];
				result = res.map(el => {
					return el.c;
				});

				resolve(result);
			});
	  });
	}
	
	public async batchExists(id: number) {
		if (this._account == null) {
		  await this.getAccount();
		}
		
		return new Promise<any>((resolve, reject) => {
			this._contract.batch_exists.call(id, (err, res) => {
				if (err) {
					reject(err);
				}

				console.log("Result: ", res);
				resolve(res);
			});
		});
	}

	public async watchBatch() {
		if (this._account == null) {
		  await this.getAccount();
		}

		var batchEvent = this._contract.newBatch();

		return new Promise<any>((resolve, reject) => {
			batchEvent.watch((err, res) => {
				if(err) {
					console.log("An error occurred watch the batch.");
					reject(err);
				}
	
				console.log("Watch batch result: ", res.args._batch_id.c);
				resolve(res.args._batch_id.c);
			});
		});
	}

	public async retrieveBatchFridge(batchID: number) {
		if (this._account == null) {
			await this.getAccount();
		}

		return new Promise<any>((resolve, reject) => {
			this._contract.find_batch_using_id.call(batchID, function(err, res) {
				if (err) {
					console.log("An error occured: ", err);
					reject(err);
				}
				console.log("RES:, ", res);
				var result = [];

				result = res[9].c;

				resolve(result);
			});
		});
	}

	// Fridge

	public async retrieveAllFridges() {
		if (this._account == null) {
			await this.getAccount();
		}

		return new Promise<any>((resolve, reject) => {
			this._contract.all_fridges.call((err, res) => {
				if (err) {
					console.log("An error occurred: ", err);
					reject(err);
				}

				if (res == null) {
					console.log("There are currently no fridges");
					resolve(res);
				}

				var result = []
				result = res.map(el => {
					return el.c
				})
				resolve(result);
			});
		});
	}

	public async addFridge(fridgeID: number, initialTemp: number) {
		if (this._account == null) {
			await this.getAccount();
		}

		await this._contract.add_fridge(fridgeID, initialTemp, (err => {
			if(err) {
				console.log("An error occurred: ", err);
				this._flashMessageService.show("Unable to add Fridge.", {cssClass: 'alert-danger', timeout: 3000});
				return;
			}

			this._flashMessageService.show("Fridge added successfully.", {cssClass: 'alert-success', timeout: 3000});
			return;
		}).bind(this));
	}

	public async checkFridge(fridgeID: number) {
		if (this._account == null) {
			await this.getAccount();
		}

		return new Promise<any>((resolve, reject) => {
			this._contract.check_fridge_exist.call(fridgeID, (err, res) => {
				if (err) {
					console.log("An error occurred: ", err);
					reject(err);
				}

				resolve(res);
			});
		});
	}

	public async retrieveCurrentFridgeTemp(fridgeID: number) {
		if (this._account == null) {
			await this.getAccount();
		}

		return new Promise<any>((resolve, reject) => {
			this._contract.find_current_fridge_temp.call(fridgeID, (err, res) => {
				if (err) {
					console.log("An error occurred: ", err);
					reject(err);
					return;
				}

				resolve(res.c[0]);
			});
		});
	}

	public async retrieveTempHistory(fridgeID: number) {
		if (this._account == null) {
			await this.getAccount();
		}

		return new Promise<any>((resolve, reject) => {
			this._contract.find_fridge_temp_history_using_id.call(fridgeID, (err, res) => {
				if (err) {
					console.log("An error occurred: ", err);
					reject(err);
					return;
				}

				var result;

				result = res.map(el => {
					return el.c;
				});
				resolve(result);
			});
		});
	}

	public async watchFridge() {

		return new Promise<any>((resolve, reject) => {
			this._contract.newFridge().watch((err, res) => {
				if(err) {
					console.log("An error occurred watching the fridge.");
					reject(err);
				}
	
				console.log("Watch fridge result: ", res.args.fridge_id.c);
				resolve(res.args.fridge_id.c);
			});
		});
	}

	// Vials

	public async addVials(batchID: number, frdigeID: number, 
		vialStart: number, vialEnd: number) {

		await this._contract.addVials(batchID, frdigeID,
			vialStart, vialEnd, 1, (err => {
				if (err) {
					console.log("An error occurred: ", err);
					this._flashMessageService.show("Unable to add Vials.", {cssClass: 'alert-danger', timeout: 3000});
					return;
				}

				this._flashMessageService.show("Vials added successfully.", {cssClass: 'alert-success', timeout: 3000});
				return;
		}).bind(this));
	}

	public async checkVials(batchID: number, vialStart: number, vialEnd: number) {

		return new Promise<any>((resolve, reject) => {
			this._contract.if_new_vial_has_valid_id.call(batchID,
				vialStart, vialEnd, (err, res) => {
					if (err) {
						console.log("An error occurred: ", err);
						reject(err);
						return;
					}

					resolve(res);
					return;
				});
		});
	}

	public async retrieveVials(batchID: number) {
		if (this._account == null) {
			await this.getAccount();
		}

		return new Promise<any>((resolve, reject) => {
			this._contract.findVials.call(batchID, (err, res) => {
				if (err) {
					console.log("An error occurred: ", err);
					reject(err);
					return;
				}

				if (res.length == 0) {
					resolve(res);
					return;
				}

				var result = []
				result = res.map(el => {
					return el.c;
				})
				resolve(result);
				return;
			});
		});
	}

	public async findVial(batchID: number, vialID: number) {
		if (this._account == null) {
			await this.getAccount();
		}

		return new Promise<any>((resolve, reject) => {
			this._contract.findVialusingID.call(vialID, batchID, (err, res) => {
				if (err) {
					console.log("An error occurred: ", err);
					reject(err);
					return;
				}

				var result = [];
				result = res.map((el, index) => {
					if (index < 2) {
						return el;
					} else {
						return el.c[0];
					}
				});
				resolve(result);
			});
		});
	}

	public async watchVial() {

		return new Promise<any>((resolve, reject) => {
			this._contract.newVial().watch((err, res) => {
				if(err) {
					console.log("An error occurred watching the fridge.");
					reject(err);
				}
	
				console.log("Watch fridge result: ", res.args._vialNo.c);
				resolve(res.args._vialNo.c);
			});
		});
	}
}
