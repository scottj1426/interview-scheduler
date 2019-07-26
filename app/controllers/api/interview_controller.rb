module API
    class SlotsController < ApplicationController
      def create
        interview = Intervew.create(interview_params)
        render json: interview
      end

      private 
      def interview_params
      params.require(:interview).permit(:_name)
      end
    end
  end