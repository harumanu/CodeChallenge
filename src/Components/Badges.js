import React from 'react';
import {
    View, 
} from 'react-native';
import Badge from './Badge';

const Badges = () => {
    return (
        <View>
            <Badge
                right={20}
                top={-70}
                color="cyan"
                content="6"
            />
            <Badge
                right={80}
                top={-65}
                color="hotpink"
                content="2"
            />
             <Badge
                right={140}
                top={-60}
                color="yellow"
                content={"22km"}
            />
        </View>
    )
}

export default Badges;