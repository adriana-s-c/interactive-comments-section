import * as React from "react";
import { Box, Textarea, Button, Text } from "@chakra-ui/react";
import { useEditID } from "../../../hooks/useEdit";
import { Comment, useCommentsData } from "../../../hooks/useCommentsData";

type EditCommentProps = {
  content: string;
  replyingTo: string | undefined;
};

export function EditComment({ content, replyingTo }: EditCommentProps) {
  const [updatedContent, setUpdatedContent] = React.useState(content);
  const { comments } = useCommentsData();
  const { editID, setEditID } = useEditID();
  const [lengthError, setLengthError] = React.useState(false);

  const handleSubmit = (event: any | undefined) => {
    event.preventDefault();
    updatedContent.length < 5
      ? setLengthError(true)
      : comments &&
        comments.map((singleComment: Comment) => {
          if (singleComment.id === editID) {
            return (singleComment.content = updatedContent);
          }
          singleComment.replies?.map((reply: Comment) => {
            if (reply.id === editID) {
              return (reply.content = updatedContent);
            }
          });
          setEditID(0);
          setLengthError(false);
        });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Textarea
          defaultValue={replyingTo ? `@${replyingTo}, ${content}` : content}
          variant="outline"
          w="100%"
          minH="100px"
          resize="none"
          rounded="10px"
          padding="10px"
          paddingLeft="20px"
          isInvalid={lengthError}
          onChange={(event) =>
            setUpdatedContent(() => {
              return replyingTo
                ? event.target.value.replace(`@${replyingTo}, `, "")
                : event.target.value;
            })
          }
        ></Textarea>
        {lengthError === true ? (
          <Text color="#ED6468">
            Comments must be at least 5 characters long.
          </Text>
        ) : null}
        <Button
          rounded="10px"
          bgColor="#5457B6"
          textTransform="uppercase"
          color="white"
          fontWeight="700"
          _hover={{ opacity: "0.5" }}
          type="submit"
          marginTop="10px"
          float="right"
          w="100px"
        >
          Update
        </Button>
      </Box>
    </form>
  );
}
