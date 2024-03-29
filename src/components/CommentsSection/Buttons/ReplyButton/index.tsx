import * as React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import imgReply from "../../../../images/svg/icon-reply.svg";
import { useReplyToUsername } from "../../../../hooks/useReplyToUsername";
import { useReplyID } from "../../../../hooks/useReply";

type ReplyButtonProps = {
  id: number;
  username: string;
};

export function ReplyButton({ id, username }: ReplyButtonProps) {
  const { replyID, setReplyID } = useReplyID();
  const { setReplyToUsername } = useReplyToUsername();

  return (
    <Box
      role="button"
      display="flex"
      flexDirection="row"
      alignItems="center"
      onClick={() => {
        replyID === id ? setReplyID(0) : setReplyID(id);
        setReplyToUsername(username);
      }}
    >
      <Img src={imgReply} alt="reply" marginRight="10px" />
      <Text color="#5457B6" fontWeight="500">
        Reply
      </Text>
    </Box>
  );
}
