import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        //만약 상태키가 없다면 홈화면으로 리다이렉트
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if(location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
        
    }
}

export default Detail;