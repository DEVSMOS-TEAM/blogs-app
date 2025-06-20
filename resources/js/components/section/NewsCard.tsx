import Newfeed from '../../../../public/newfeed.png';
import { Button } from '../ui/button';

const NewsCard = () => {
    return (
        <div className="md:flex">
            <div className="md:w-1/3">
                <div className="p-4 text-center text-gray-500">
                    <img src={Newfeed} alt="Global Climate Summit" className="h-full w-full object-cover" />
                </div>
            </div>
            <div className="p-6 md:w-2/3">
                <h2 className="mb-3 text-2xl font-bold text-foreground">Global Climate Summit Addresses Urgent Climate Action</h2>

                <p className="mb-6 text-foreground">
                    World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy
                    targets.
                </p>
                <div className="flex items-center justify-between">
                    <Button className="font-medium text-card">Read More</Button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
