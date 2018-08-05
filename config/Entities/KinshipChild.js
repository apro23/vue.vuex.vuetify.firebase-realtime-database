import {KinshipChildIncome} from '@/../config/Entities/KinshipChildIncome.js';
import {KinshipChildCustodyStatus} from '@/../config/Entities/KinshipChildCustodyStatus.js';

export const KinshipChild = {
    title:'Kinship Child',
    toolbarTitle:"Kinship Children", 
    entityType:"KinshipChild",
    icon:"person",
    addIcon:"person_add",
    addButtonText:"Add Child",
    onDelete:{
      confirmMessage:"Are you sure you want to delete this Kinship Child from his/her Primary Kinship Caregiver?",
      route:"/dashboard",
    },
    formFields:[
        {
        fieldType:'text',
        fieldName:"FirstName",
        fieldLabel:"First Name",
        rules:[
            v => !!v || 'Required',
            v => v.length <= 30 || 'Name must be less than 30',
        ] ,
        },
        {
        fieldType:'text',
        fieldName:"MiddleName",
        fieldLabel:"Middle Name",
        rules:[
            v => !!v || 'Required',
            v => v.length <= 30 || 'Name must be less than 30',
        ] ,
        },
        {
        fieldType:'text',
        fieldName:"LastName",
        fieldLabel:"Last Name",
        rules:[
            v => !!v || 'Required',
            v => v.length <= 30 || 'Name must be less than 30',
        ] ,
        },
        {
        fieldType:'text',
        fieldName:"PrimaryStreetAddress",
        fieldLabel:"Primary Street Address",
        rules:[
            v => !!v || 'Required',
            v => v.length <= 30 || 'Name must be less than 30',
        ] ,
        },
        {
        fieldType:'date',
        fieldName:"BirthDate",
        fieldLabel:"BirthDate",
        rules:[
            v => !!v || 'Required',
            v => v.length <= 30 || 'Name must be less than 30',
        ] ,
        },
    ],
    subEntities:{
        KinshipChildIncome:KinshipChildIncome,
        KinshipChildCustodyStatus:KinshipChildCustodyStatus,
    },
}
