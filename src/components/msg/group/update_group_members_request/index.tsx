import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUpdateGroupMembersRequest } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const UpdateGroupMembersRequest = (props: {
  message: MsgUpdateGroupMembersRequest;
}) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateGroupMembersRequest"
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

export default UpdateGroupMembersRequest;
