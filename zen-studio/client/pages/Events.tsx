import { Link } from "react-router-dom";
import { Search, List, Grid3x3, Calendar, Plus } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Events() {
  // For now, showing empty state. In production, this would check if events exist
  const hasEvents = false;

  return (
    <AppLayout>
      <div className="p-10">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-figtree text-[32px] font-black leading-[40px] text-chekpass-black-main">
            Events
          </h1>
          <Link to="/create-event">
            <Button icon={<Plus className="w-4 h-4" />}>
              Create event
            </Button>
          </Link>
        </div>

        {hasEvents ? (
          // Events list (would render here if events exist)
          <div>Events list</div>
        ) : (
          // Empty State
          <div className="flex flex-col items-center gap-6">
            {/* Search and View Toggle */}
            <div className="flex items-center gap-6 w-full max-w-[482px]">
              <div className="flex-1">
                <Input
                  placeholder="Search"
                  icon={<Search className="w-6 h-6 text-chekpass-black-250" />}
                />
              </div>
              <div className="flex items-center">
                <button className="w-12 h-12 flex items-center justify-center border border-chekpass-black-150 rounded-l bg-chekpass-black-200">
                  <List className="w-6 h-6 text-chekpass-black-370" />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-l-0 border-chekpass-black-150 rounded-r bg-white">
                  <Grid3x3 className="w-6 h-6 text-chekpass-black-370" />
                </button>
              </div>
            </div>

            {/* Empty State Card */}
            <div className="mt-20 flex flex-col items-center gap-10 px-10 py-10 rounded-2xl bg-chekpass-black-100 max-w-[379px]">
              <Calendar className="w-15 h-15 text-chekpass-black-main" size={60} />
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="font-figtree text-2xl font-black leading-[120%] tracking-[-0.48px] text-chekpass-black-main">
                  No events created yet
                </h2>
                <p className="font-lato text-base leading-[150%] text-chekpass-black-main">
                  Get started by creating events and get them out to the world.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
