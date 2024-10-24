import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  aboutMeSchema,
  AboutMeSchemaType,
} from '@/lib/validators/user.profile.validator';

const ReadMeForm = ({ handleClose }: { handleClose: () => void }) => {
  const form = useForm<AboutMeSchemaType>({
    resolver: zodResolver(aboutMeSchema),
    defaultValues: {
      aboutMe: '',
    },
  });

  function onSubmit() {}

  const handleFormClose = () => {
    form.reset();
    handleClose();
  };

  return (
    <div className=" flex-1 relative">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 h-full flex flex-col justify-between"
        >
          <div>
            <FormField
              control={form.control}
              name="aboutMe"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Write here" {...field} />
                  </FormControl>
                  <FormDescription>
                    Describe yourself between 50 to 255 characters.
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="py-4 flex gap-4 justify-end">
            <Button
              onClick={handleFormClose}
              variant={'outline'}
              className="mt-0 text-white rounded-[8px]"
            >
              {' '}
              Cancel{' '}
            </Button>
            <Button type="submit" className="mt-0 text-white rounded-[8px]">
              {' '}
              Add About Me{' '}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ReadMeForm;