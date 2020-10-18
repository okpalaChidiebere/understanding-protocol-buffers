import {Employee, Employees} from "./employees_pb";
import  * as fs from 'fs';

/**The protoC generates a template file that we use to write all the functions below */

const hussein = new Employee(); //calling this, you will have a functions auto generated by the ProtoC which you can inherit and use
hussein.setId(1001);
hussein.setName('Hussein');
hussein.setSalary(1001);

console.log("myName is "+ hussein.getName()); //Hussein

const ahmed = new Employee(); //calling this, you will have a functions auto generated by the ProtoC which you can inherit and use
ahmed.setId(1002);
ahmed.setName('Ahmed');
ahmed.setSalary(9000);

const rick = new Employee(); //calling this, you will have a functions auto generated by the ProtoC which you can inherit and use
rick.setId(1003);
rick.setName('Rick');
rick.setSalary(5000);

/** creating an array. remember the message/schema for our array is defined in out proto file has the same name with the object name here too */
const employees = new Employees();
employees.addEmployees(hussein);
employees.addEmployees(ahmed);
employees.addEmployees(rick);

const bytes = employees.serializeBinary();

console.log("binary: " + bytes) //serialize our object into binary, bunch of random characters
fs.writeFileSync("./data/empbinarydata", bytes); //this will generate file of size 52B

const employees2 = Employees.deserializeBinary(bytes); //we get the object data
console.log(employees2.toString()); //string of data
console.log(employees2); //object data. You cannot use this ideally. You use 'AsObject' fucntion as required by protobuff to use data

//npm init -y
//npm install --save-dev @types/node typescript ts-node-dev grpc-tools grpc_tools_node_protoc_ts @types/google-protobuf
//'npm run tsc -- --init' Make sure you have the tsc command in your script at package.json and save the file before you run this command to create the config file
//i will only transpile to ts because i am running in development; if i was to push to staging or prod, them i can transpile to js

//ideally, you send proto data from your server as an object so that the frontend can receive the json object and use it properly. We did not do that in the course. we just send binary data by serializing and deserializing
//protocol buffers are smaller in size than JSON because JSOn includes schema in every message. ProtBuff does not. The schema is stored by the client and is used to interpret the proto encoded message
//protobuff messages are not plain text when sent over the wire

//in this lesson i did not use the grpc. Just ur protobuff basics
//For More
//https://developers.google.com/protocol-buffers/docs/proto3
//https://developers.google.com/protocol-buffers


/*To be able to successfully transpile
make sure your shell file is executable by running 'chmod +x gen.sh' in terminal where the file is located
grpc-tools and grpc-tools_node_protoc_ts package go hand in hand for the file to suceesfully transpile*/