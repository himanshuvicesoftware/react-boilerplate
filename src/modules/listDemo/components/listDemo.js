import React from 'react';
import ListContainer from '../../list/components';
import FormContainer from '../../form/components/formContainer';

const ListDemo = () => {
    return (
        <div>
            <FormContainer />
            <h2>Articles</h2>
            <ListContainer />
        </div>
    );
}

export default ListDemo;