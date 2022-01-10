import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreateGroupAccountRequest } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const CreateGroupAccountRequest = (props: {
  message: MsgCreateGroupAccountRequest;
}) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateGroupAccountRequest"
        components={[
          (
            <Name
              address={message.admin}
              name={adminMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default CreateGroupAccountRequest;
