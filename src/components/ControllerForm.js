import React from "react";
import {Controller} from "react-hook-form";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

function ControllerForm ({name,placeholder,control,rules,defaultValue,multiLine,numberOfLines,errors}) {
    return (
        
        <Controller name={name} control={control} rules={rules} 
                    defaultValue={defaultValue} render={({ field: { onChange, onBlur, value } }) => (
                        <AppTextInput placeholder={placeholder}  multiLine={multiLine} numberOfLines={numberOfLines}
                                      onBlur={onBlur} onChangeText={onChange} value={value}/>
         
                                                   
                                      )}
                                      {...errors.name && <Text>This is required.</Text>}            
                                      />

                  
    );
}

export default ControllerForm;

/*
import React from "react";
import {Controller,useForm} from "react-hook-form";
import {TextInput} from "react-native";


function ControllerForm ({style,name}) {

    const { control } = useForm({
        defaultValues: {
          firstName: '',
          lastName: ''
        }
      });

    return (
       
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={style}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      
      
    );
}

export default ControllerForm;*/
 

