import React from 'react';
import {
    Text,
    View,
    FlatList,
    Image,

} from 'react-native';

import styles from './style';

export default class Ticket extends React.Component {
    constructor() {
        super()
        this.state = {
            dataSource: []
        }
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <Image style={styles.imgUsuRank}
                    source={{ url: item.image }}
                />          {/*acima... renderização da imagem do participante no ranking */}
                <View>
                    <Text>  {/* renderização do nome do participante no ranking */}
                        {item.name}
                    </Text>
                    <Text>  {/* renderização da posição do participante no ranking */}
                        {item.position}
                    </Text>
                </View>
            </View>
        )
    }

    componentDidMount() {
        const url = 'https://next.json-generator.com/api/json/get/4kVH1lth_'

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.ranking_array
                }); {/* renderização do array de ranking */ }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}