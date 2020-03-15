import {ScrollView} from 'react-native-gesture-handler';
import {SectionList} from 'react-native';
import {Item} from "./Item";
export const ItemList = (props:any) => {
  return (
    <ScrollView>
      <SectionList 
       data={props.data}
      renderItem={({item}=>{
          <Item value={item}/>
      })
      }
      />
    </ScrollView>
  );
};
